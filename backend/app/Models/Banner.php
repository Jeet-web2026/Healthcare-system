<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Banner extends Model
{
    protected $fillable = [
        'subheading',
        'heading',
        'description',
        'image_url',
    ];
}
