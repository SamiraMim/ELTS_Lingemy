<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class EnglishQuestionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'level' => 5,
            'stage' => 'hard',
            'flag' => 2,
            'type' => 'text',
            'content' => $this->faker->text($maxNbChars = 200) ,
            'content_url' => 'route_name' ,
            'choice_1' => $this->faker->text($maxNbChars = 50),
            'choice_2' => $this->faker->text($maxNbChars = 50),
            'choice_3' => $this->faker->text($maxNbChars = 50),
            'choice_4' => $this->faker->text($maxNbChars = 50),
            'score' => '1',
            'answer' => 'nothing',
            'status' => 1,
        ];
    }
}
