<?php

namespace App\Http\Resources\Common;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OrganisationdetailsResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'primaryLocation' => $this->primaryLocation,
            'branches' => $this->branches,
            'primaryEmail' => $this->primaryEmail,
            'secondaryEmails' => $this->secondaryEmails,
            'availableTime' => $this->availableTime->format('d-m-Y'),
            'socialmediainfo' => $this->socialmediainfo,
            'temsandconditions' => $this->temsandconditions,
            'privacypolicy' => $this->privacypolicy,
        ];
    }
}
