<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OrgDetails extends Model
{
    protected $fillable = [
        'primaryLocation',
        'branches',
        'primaryEmail',
        'secondaryEmails',
        'availableTime',
        'socialmediainfo',
        'termsandconditions',
        'privacypolicy'
    ];

    protected $casts = [
        'branches' => 'array',
        'secondaryEmails' => 'array',
        'availableTime' => 'datetime',
        'socialmediainfo' => 'array',
    ];
}
