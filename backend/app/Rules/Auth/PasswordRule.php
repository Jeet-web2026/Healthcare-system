<?php

namespace App\Rules\Auth;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class PasswordRule implements ValidationRule
{
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        if (strlen($value) < 8) {
            $fail(__('The :attribute must be at least 8 characters long.'));
            return;
        }

        if (! preg_match('/[A-Z]/', $value)) {
            $fail(__('The :attribute must contain at least one uppercase letter.'));
        }

        if (! preg_match('/[a-z]/', $value)) {
            $fail(__('The :attribute must contain at least one lowercase letter.'));
        }

        if (! preg_match('/\d/', $value)) {
            $fail(__('The :attribute must contain at least one number.'));
        }

        if (! preg_match('/[\W_]/', $value)) {
            $fail(__('The :attribute must contain at least one special character.'));
        }
    }
}
