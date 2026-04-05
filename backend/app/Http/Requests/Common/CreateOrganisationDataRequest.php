<?php

namespace App\Http\Requests\Common;

use Illuminate\Foundation\Http\FormRequest;

class CreateOrganisationDataRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'primaryLocation' => 'required|string',
            'branches' => 'required|array',
            'primaryEmail' => 'required|email',
            'secondaryEmails' => 'nullable|array',
            'availableTime' => 'required|string',
            'socialmediainfo' => 'nullable|array',
            'termsandconditions' => 'required|string',
            'privacypolicy' => 'required|string'
        ];
    }
}
