<?php

namespace App\Models\Gip;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Intern extends Authenticatable
{
    use HasFactory;

    protected $guarded = [];

    public function images()
    {
        return $this->hasMany(Gallery::class, 'intern_id', 'id');
    }

    public function profile_image()
    {
        return $this->hasOne(Gallery::class, 'intern_id', 'id')
            ->where('profile_image', 1);
    }

    public function batch()
    {
        return $this->belongsTo(BatchCategory::class, 'batch_category_id', 'id');
    }

    public function permissions()
    {
        return [];
    }
}
