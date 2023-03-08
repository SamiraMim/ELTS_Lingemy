<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAccessLinksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('access_links', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id');
            $table->foreignId('request_id');
            $table->string('access_token');
            $table->string('exam_code');
            $table->tinyInteger('status');
            $table->date('expired_time');
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
        Schema::dropIfExists('access_links');
    }
}
