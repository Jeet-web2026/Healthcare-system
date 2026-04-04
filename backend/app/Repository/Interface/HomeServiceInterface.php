<?php

namespace App\Repository\Interface;


interface HomeServiceInterface
{
    public function index();
    public function createHomePageData(array $data);
    public function updateHomePageData(int $id, array $data);
}
