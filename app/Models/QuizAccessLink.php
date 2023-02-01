<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QuizAccessLink extends Model
{
    use HasFactory;
    protected $table = 'quiz_access_links';
    protected $guarded = [];
}
