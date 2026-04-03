<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AboutUs extends Model
{
    protected $fillable = [
        'about_us',
        'our_goals',
        'images',
        'description',
        'org_details_id'
    ];

    public function orgDetails()
    {
        return $this->belongsTo(OrgDetails::class);
    }
}
