<?php

namespace App\Http\Resources;

use App\Models\EnglishQuestion;
use Illuminate\Http\Resources\Json\JsonResource;

class RandomQuestionResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $question = EnglishQuestion::where('id', $this->question_id)->get(['content', 'score', 'answer']);
        $content = $question[0]['content'];
        return [
            'id' => $this->id,
            'question_id' => $this->question_id,
            'user_answer' => $this->user_answer,
            'grade' => $this->grade,
            'question' => $question[0]['content'],
            'answer' => $question[0]['answer'],
            'score' => $question[0]['score'],
        ];
    }
}
