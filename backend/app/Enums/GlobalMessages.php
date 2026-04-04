<?php

namespace App\Enums;

enum GlobalMessages: string
{
    case SOMETHING_WENT_WRONG = 'Something went wrong!';
    case CREATED = 'registered successfully!, Please verify your email to complete the registration process.';
    case EMAILVERIFICATIONCOMPLETED = 'Email verified successfully!';
    case FIELDS_REQUIRED = 'Fields are required!';
    case NOT_FOUND = 'Not found!';
    case EMAILVERIFICATIONFAILED = 'Email verification failed!';
    case LOGINSUCCESS = 'Login successful!';
    case INVALID_CREDENTIALS = 'Invalid credentials!';
    case DATA_FETCHED = 'Data fetched successfully!';
    case DATA_CREATED = 'Data created successfully!';
    case DATA_UPDATED = 'Data updated successfully!';

    public function withResource(string $resource): string
    {
        return match ($this) {
            self::CREATED => "{$resource} {$this->value}",
            self::FIELDS_REQUIRED => "{$resource} {$this->value}",
            self::NOT_FOUND => "{$resource} {$this->value}",
            self::DATA_CREATED => "{$resource} {$this->value}",
            self::DATA_UPDATED => "{$resource} {$this->value}",
        };
    }
}
