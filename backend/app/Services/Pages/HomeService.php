<?php

namespace App\Services\Pages;

use App\Repository\Interface\HomeServiceInterface;

class HomeService implements HomeServiceInterface
{
    public function index()
    {
        $bannerData = $this->bannerdata();
        return $bannerData;
    }

    private function bannerdata()
    {
        return [
            [
                'id' => 1,
                'title' => 'Welcome to Our Healthcare System',
                'description' => 'Providing quality healthcare services for you and your family.',
                'image_url' => 'https://example.com/banner1.jpg',
            ]
        ];
    }
}
