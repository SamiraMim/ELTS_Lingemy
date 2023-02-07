<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GeneralAnswer extends Model
{
    use HasFactory;
    protected $table = 'general_answers';
    protected $guarded = [];
}
