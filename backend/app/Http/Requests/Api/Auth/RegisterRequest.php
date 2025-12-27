<?php

namespace App\Http\Requests\Api\Auth;

use App\Rules\Auth\PasswordRule;
use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'email' => ['required', 'email', 'unique:users,email'],
            'password' => ['required', new PasswordRule()],
            'confirm_password' => ['required', 'same:password'],
            'term_conditions' => ['accepted'],
        ];
    }

    public function messages(): array
    {
        return [
            'email.required' => 'Email is required',
            'email.email' => 'Email must be a valid email address',
            'email.unique' => 'Email has already been taken',
            'password.required' => 'Password is required',
            'confirm_password.required' => 'Confirm Password is required',
            'confirm_password.same' => 'Confirm Password must match Password',
            'term_conditions.accepted' => 'You must accept the terms and conditions',
        ];
    }
}
