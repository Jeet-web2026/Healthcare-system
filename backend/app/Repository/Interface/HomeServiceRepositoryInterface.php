<?php

namespace App\Repository\Interface;

use App\Models\Banner;

interface HomeServiceRepositoryInterface
{
    public function bannerData(): Banner;
    public function createHomePageData(array $data): Banner;
    public function updateHomePageData(int $id, array $data): Banner;
}
