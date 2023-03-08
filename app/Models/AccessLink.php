<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AccessLink extends Model
{
    use HasFactory;
    protected $table = 'access_links';
    protected $guarded = [];
}
