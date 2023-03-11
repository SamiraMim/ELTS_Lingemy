<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\ApiController;
use App\Models\EnglishQuestion;
use Carbon\Carbon;


class QuestionController extends ApiController
{
    // Show List of Question
    public function index()
    {
        $question_list = EnglishQuestion::paginate(5);
        return $this->successResponse( $question_list, 201);
    }

    // Create New Question
    public function store(Request $request)
    {
        // validation before insert

        $new_question = new EnglishQuestion([
            'level' => $request->level,
            'stage' => $request->stage,
            'flag' => $request->flag,
            'type'=> $request->type,
            'content'=> $request->content,
            'content_url'=> $request->content_url,
            'choice_1'=> $request->choice_1,
            'choice_2'=> $request->choice_2,
            'choice_3'=> $request->choice_3,
            'choice_4'=> $request->choice_4,
            'score'=> $request->score,
            'answer'=> $request->answer,
            'status'=> 1,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);
        $new_question->save();

        return $this->successResponse( 'Created', 201);
    }

    // Show Question info 
    public function show($id)
    {
        $question = EnglishQuestion::find($id);
        return $this->successResponse( $question, 201);
    }

    // Update Question info
    public function update(Request $request, $id)
    {
        // validation before update

        EnglishQuestion::where('id', $id)->update([
            'level' => $request->level,
            'stage' => $request->stage,
            'flag' => $request->flag,
            'type'=> $request->type,
            'content'=> $request->content,
            'content_url'=> $request->content_url,
            'choice_1'=> $request->choice_1,
            'choice_2'=> $request->choice_2,
            'choice_3'=> $request->choice_3,
            'choice_4'=> $request->choice_4,
            'score'=> $request->score,
            'answer'=> $request->answer,
            'status'=> 1,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);
        return $this->successResponse( 'Updated', 201);
    }

    // Delete Question
    public function destroy($id)
    {
        $question = EnglishQuestion::where('id', $id)->delete();
        return $this->successResponse( 'Deleted', 201);

    }
}
