<?php

namespace App\Enums;

enum GlobalMessages: string
{
    case SOMETHING_WENT_WRONG = 'Something went wrong!';
    case CREATED = 'Created successfully!';
    case EMAILVERIFICATIONCOMPLETED = 'Email verified successfully!';
    case FIELDS_REQUIRED = 'Fields are required!';
    case NOT_FOUND = 'Not found!';
    case EMAILVERIFICATIONFAILED = 'Email verification failed!';

    public function withResource(string $resource): string
    {
        return match ($this) {
            self::CREATED => "{$resource} {$this->value}",
            self::FIELDS_REQUIRED => "{$resource} {$this->value}",
            self::NOT_FOUND => "{$resource} {$this->value}",
        };
    }
}
