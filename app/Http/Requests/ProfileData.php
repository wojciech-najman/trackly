<?php

declare(strict_types=1);

namespace App\Http\Requests;

use Illuminate\Validation\Rule;
use Spatie\LaravelData\Data;

class ProfileData extends Data
{
    public function __construct(public string $name, public string $email) {}

    public static function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'email' => [
                'required',
                'string',
                'max:255',
                Rule::unique('users')->ignore(auth()->user()->id),
            ],
        ];
    }
}
