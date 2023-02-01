<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRequestListsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('request_lists', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id');
            // $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->string('ref_num')->unique();
            $table->string('type')->default('quiz');
            $table->tinyInteger('status');
            $table->date('date');
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
        Schema::dropIfExists('request_lists');
    }
}
