<?php
namespace App\Traits;

use App\Models\AccessLink;
use App\Models\RandomQuestion;
use App\Models\EnglishQuestion;

trait ExamUtilities {

    // make Access Token
    public function makeRandomToken () {
        do {
            $token_key = \Str::random(30);
        } while (AccessLink::where("access_token", "=", $token_key)->first() instanceof AccessLink);

        return $token_key;
    }

    // make Test Code
    public function makeRandomCode () {
        do {
            $exam_code = \Str::random(10);
        } while (AccessLink::where("exam_code", "=", $exam_code)->first() instanceof AccessLink);
        
        return $exam_code;
    }

    // make Random Questions
    public function makeRandomQuestions ($exam_code, $level) {
        
        $checkExist = RandomQuestion::where('exam_code', $exam_code)->exists();
        if(!$checkExist) {
            $easy_ids = EnglishQuestion::where('level', $level)->where('stage', 'easy')->get('id')->toArray();
            $easy_ids = array_column($easy_ids, 'id');
            $medium_ids = EnglishQuestion::where('level', $level)->where('stage', 'medium')->get('id')->toArray();
            $medium_ids = array_column($medium_ids, 'id');
            $hard_ids = EnglishQuestion::where('level', $level)->where('stage', 'hard')->get('id')->toArray();
            $hard_ids = array_column($hard_ids, 'id');

            $question_ids = [];
            
            // tedad soal entekhabi az har basket: weight
            $weight = 4;

            for ( $i = 0 ; $i < $weight ; $i++ ) {
                $random = array_rand($easy_ids);
                array_push($question_ids, $easy_ids[$random]);
                unset($easy_ids[$random]);
            }
            for ( $i = 0 ; $i < $weight ; $i++ ) {
                $random = array_rand($medium_ids);
                array_push($question_ids, $medium_ids[$random]);
                unset($medium_ids[$random]);
            }
            for ( $i = 0 ; $i < $weight ; $i++ ) {
                $random = array_rand($hard_ids);
                array_push($question_ids, $hard_ids[$random]);
                unset($hard_ids[$random]);
            }
            foreach ($question_ids as $q_id) {
                $random_question = new RandomQuestion([
                    'exam_code' => $exam_code,
                    'question_id' => $q_id,
                    'type' => 'text',
                    'status' => 1,
                ]);
                $random_question->save();
            }           
        }

        return 'created';
    }
}