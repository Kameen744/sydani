<?php

namespace App\Models\Gip;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Intern extends Authenticatable
{
    use HasFactory;

    protected $guarded = [];
}
