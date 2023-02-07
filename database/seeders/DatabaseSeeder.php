<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\EnglishQuestion;
use App\Models\GeneralQuestion;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        // EnglishQuestion::factory(10)->create();
        GeneralQuestion::factory(10)->create();

    }
}
