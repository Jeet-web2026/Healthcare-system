<?php

namespace App\Repository\Interface;

use App\Models\Banner;

interface HomeServiceRepositoryInterface
{
    public function bannerData(): Banner;
}
