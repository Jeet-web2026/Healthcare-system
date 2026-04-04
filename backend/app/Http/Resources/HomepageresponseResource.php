<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class HomepageresponseResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'banner' => [
                'heading' => $this->heading,
                'subheading' => $this->subheading,
                'description' => $this->description,
                'image_url' => $this->image_url
            ]
        ];
    }
}
