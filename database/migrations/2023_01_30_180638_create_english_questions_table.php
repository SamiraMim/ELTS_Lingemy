<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEnglishQuestionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('english_questions', function (Blueprint $table) {
            $table->id();
            $table->string('level');
            $table->string('stage');
            $table->string('flag');
            $table->string('type');
            $table->string('question_text');
            $table->string('choice_1');
            $table->string('choice_2');
            $table->string('choice_3');
            $table->string('choice_4');
            $table->string('score');
            $table->string('answer');
            $table->tinyInteger('status');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('english_questions');
    }
}
