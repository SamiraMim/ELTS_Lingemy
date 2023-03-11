<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClientUser extends Model
{
    use HasFactory;
    protected $table = 'client_users';
    protected $guarded = [];

    public function accessLinks () {
        return $this->hasMany(AccessLink::class , 'user_id', 'id')->orderby('id', 'desc');
    }
}
