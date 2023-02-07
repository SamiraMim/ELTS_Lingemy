<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Traits\QuizUtilities;
use App\Models\QuizAccessLink;
use App\Models\EnglishQuestion;
use App\Models\GeneralQuestion;

class QuizController extends ApiController
{
    use QuizUtilities;

    // there should be 2 index 1 for generalQuestions another for englishQuestions
    public function index ($token) {
        // show the start page!
        $checkExist = QuizAccessLink::where('access_token', $token)->exists();
        if($checkExist) {
            // $quiz_code = QuizAccessLink::where('access_token', $token)->get('quiz_code');
            // based on quiz_code ->random Question
            return view('Home');
        } else {
            $msg = 'Not Registered';
            return $this->errorResponse($msg, 422);
        }
    }

    // get general question
    public function getQuestion ($id) {
        // $en_question = EnglishQuestion::all();
        // RandomQuestion! user_id!
        $en_question = GeneralQuestion::where('id', $id)->get();
        return response()->json($en_question);
    }
    // after complete general question give level and quiz-code from user
    // call makeRandomQuestions

    // send one Question per id random Question
    // store one answer per question id random Question
    // just need a method to fetch a question
    // just need a method to store the posted answer

    public function store (Request $request) {
        // store answers
        // quiz-code or token! => user! save!
        return response()->json($request->all());
    }
}
