<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class GeneralQuestionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'content' => $this->faker->text($maxNbChars = 200) ,
            'choice_1' => $this->faker->text($maxNbChars = 50),
            'choice_2' => $this->faker->text($maxNbChars = 50),
            'choice_3' => $this->faker->text($maxNbChars = 50),
            'choice_4' => $this->faker->text($maxNbChars = 50),
            'status' => 1,
        ];
    }
}
