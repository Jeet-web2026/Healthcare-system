<?php

namespace App\Repository\Interface;

interface AuthenticationServiceInterface
{
    public function registerUser(array $request);
}
