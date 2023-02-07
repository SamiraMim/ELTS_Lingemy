<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EnglishQuestion extends Model
{
    use HasFactory;
    protected $table = 'english_questions';
    protected $guarded = [];
}
