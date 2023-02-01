<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\QuizAccessLink;

class QuizController extends ApiController
{
    //
    public function index ($token) {

        // show the start page!
        $checkExist = QuizAccessLink::where('access_token', $token)->exists();
        if($checkExist) {
            return view('Home');

        } else {
            $msg = 'Not Registered';
            return $this->errorResponse($msg, 422);
        }

    }

    public function startQuiz () {
        
    }
}
