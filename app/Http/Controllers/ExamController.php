<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Carbon\Carbon;
use App\Traits\ExamUtilities;
use App\Models\GeneralAnswer;
use App\Models\AccessLink;
use App\Models\RandomQuestion;
use App\Models\EnglishQuestion;
use App\Models\GeneralQuestion;

class ExamController extends ApiController
{
    use ExamUtilities;

    public function index ($token) {
        $checkExist = AccessLink::where('access_token', $token)->exists();
        if($checkExist) {
            return view('Home');
        } else {
            $msg = 'Not Registered';
            return $this->errorResponse($msg, 403);
        }
    }

    // Exam Starts
    public function startExam (Request $request) {
        $checkExist = AccessLink::where('exam_code', $request->exam_code)->exists();
        if ($checkExist) {
            $data = [
                'exam_code' => $request->exam_code,
            ];
            return $this->successResponse($data, 200);
        } else {
            $msg = 'Not Registered';
            return $this->errorResponse($msg, 403);
        }
    }

    // find the last unanswered question!
    public function getCurrentQuestion (Request $request) {
        $checkExist = GeneralAnswer::where('exam_code', $request->exam_code)->exists();
        if ($checkExist) {
            $last_id = GeneralAnswer::where('exam_code', $request->exam_code)->orderBy('question_id', 'desc')->get('question_id');
            $last_id = $last_id[0]['question_id'];
        } else {
            $last_id = 0;
        }
        $current_id = $last_id + 1;
        $current_question = GeneralQuestion::find($current_id);
        if ($current_question == null) {
            return $this->successResponse('No More Question', 200 , 'level');
        } else {
            return $this->successResponse($current_question, 200 , 'question');
        }

    }

    public function generalQuestionHandler (Request $request) {
        $checkExist = GeneralAnswer::where('exam_code', $request->exam_code)
                        ->where('question_id', $request->answer['id'])->exists();
        if (!$checkExist) {
            $general_answer = new GeneralAnswer([
                'question_id' => $request->answer['id'],
                'user_id' => '1',
                'exam_code' => $request->exam_code,
                'user_answer' => $request->answer['value'],
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ]);
            $general_answer->save();
        }
        $next_id = $request->answer['id'] + 1;
        $next_question = GeneralQuestion::find($next_id);
        if($next_question == null) {
            return $this->successResponse('No More Question', 200 , 'level');
        } else {
            return $this->successResponse($next_question, 200 , 'question');
        }

    }

    public function levelHandler (Request $request) {
        $result = $this->makeRandomQuestions($request->exam_code, $request->english_level);
        return $this->successResponse($result, 200);
    }

    // find the last unanswered question!
    public function getCurrentEngQuestion (Request $request) {
        
        $checkExist = RandomQuestion::where('exam_code', $request->exam_code)
                            ->where('user_answer', null)->exists();
        if ($checkExist) {
            $unanswered_q = RandomQuestion::where('exam_code', $request->exam_code)
                            ->where('user_answer', null)->get();
            $id = $unanswered_q[0]['id'];
            $question_id = $unanswered_q[0]['question_id'];
            $current_question = EnglishQuestion::find($question_id);
            return $this->successResponse($current_question, 200 , 'question');
        } else {
            return $this->successResponse('No More Question', 200 , 'finish');
        }

    }

    public function englishQuestionHandler (Request $request) {

        $user_answer = RandomQuestion::where('exam_code', $request->exam_code)
            ->where('question_id', $request->answer['id'])->get('user_answer');

        $user_answer = $user_answer[0]['user_answer'];
        if($user_answer == null) {
            RandomQuestion::where('exam_code', $request->exam_code)
                ->where('question_id', $request->answer['id'])
                ->update([ 'user_answer' => $request->answer['value'] ]);
        }

        $checkExist = RandomQuestion::where('exam_code', $request->exam_code)
                        ->where('user_answer', null)->exists();
        if ($checkExist) {
            $unanswered_q = RandomQuestion::where('exam_code', $request->exam_code)
                            ->where('user_answer', null)->get();
            $id = $unanswered_q[0]['id'];
            $question_id = $unanswered_q[0]['question_id'];
            $next_question = EnglishQuestion::find($question_id);
            return $this->successResponse($next_question, 200 , 'question');
        } else {
            return $this->successResponse('No More Question', 200 , 'finish');
        }
    }
}
