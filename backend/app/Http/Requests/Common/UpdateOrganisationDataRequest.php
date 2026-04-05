<?php

namespace App\Http\Requests\Common;

use Illuminate\Foundation\Http\FormRequest;

class UpdateOrganisationDataRequest extends FormRequest
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
            'primaryLocation' => 'sometimes|string',
            'branches' => 'sometimes|array',
            'primaryEmail' => 'sometimes|email',
            'secondaryEmails' => 'nullable|array',
            'availableTime' => 'sometimes|string',
            'socialmediainfo' => 'nullable|array',
            'termsandconditions' => 'sometimes|string',
            'privacypolicy' => 'sometimes|string'
        ];
    }
}
