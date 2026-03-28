<?php

namespace App\Enums;

enum GlobalMessages: string
{
    case SOMETHING_WENT_WRONG = 'Something went wrong!';
    case CREATED = 'Created successfully!';

    public function withResource(string $resource): string
    {
        return match ($this) {
            self::CREATED => "{$resource} {$this->value}",
        };
    }
}
