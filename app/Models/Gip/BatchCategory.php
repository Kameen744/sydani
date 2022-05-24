<?php

namespace App\Models\Gip;

use App\Models\Gip\Gallery;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class BatchCategory extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function galleries()
    {
        return $this->hasMany(Gallery::class, 'batch_category_id', 'id');
    }
}
