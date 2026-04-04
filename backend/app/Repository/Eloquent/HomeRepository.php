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

    public function createHomePageData(array $data): Banner
    {
        return Banner::create($data);
    }

    public function updateHomePageData(int $id, array $data): Banner
    {
        $banner = Banner::findOrFail($id);
        $banner->update($data);
        return $banner;
    }
}
