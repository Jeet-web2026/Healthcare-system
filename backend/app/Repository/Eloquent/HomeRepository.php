<?php

namespace App\Repository\Eloquent;

use App\Models\Banner;
use App\Repository\Interface\HomeServiceRepositoryInterface;

class HomeRepository implements HomeServiceRepositoryInterface
{
    public function bannerData(): Banner
    {
        return Banner::first();
    }
}
