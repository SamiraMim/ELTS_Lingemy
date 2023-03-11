<?php

namespace App\Http\Controllers\Admin;

use App\Models\ClientUser;
use Illuminate\Http\Request;
use App\Models\RandomQuestion;
use App\Models\EnglishQuestion;
use App\Http\Controllers\Controller;
use App\Http\Controllers\ApiController;
use App\Http\Resources\ClientUserResource;
use App\Http\Resources\RandomQuestionResource;
use App\Http\Resources\EnglishQuestionResource;

class MentorController extends ApiController
{
    public function index()
    {
        $client_users = ClientUser::all();
        return $this->successResponse( ClientUserResource::collection($client_users->load('accessLinks')), 201);
    }

    public function store(Request $request)
    {
        //
    }

    public function show($exam_code)
    {
        $exam_details = RandomQuestion::where('exam_code', $exam_code)->get();
        return $this->successResponse( RandomQuestionResource::collection($exam_details), 201);
    }

    public function update(Request $request, $id)
    {
        $data = $request->all();
        foreach ($data as $item) {
            RandomQuestion::where('exam_code', $item['exam_code'])
                        ->where('question_id', $item['question_id'])
                        ->update(['grade' => $item['value'] ]);
        }
        return $this->successResponse( 'updated', 201);;
    }

    public function destroy($id)
    {
        //
    }
}
