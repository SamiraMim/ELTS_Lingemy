<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RandomQuestion extends Model
{
    use HasFactory;
    protected $table = 'random_questions';
    protected $guarded = [];
}
