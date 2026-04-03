<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Whoweare extends Model
{
    protected $fillable = [
        'org_details_id',
        'subheading',
        'heading',
        'description',
        'image_url',
        'keypoints'
    ];

    public function orgDetails()
    {
        return $this->belongsTo(OrgDetails::class);
    }
}
