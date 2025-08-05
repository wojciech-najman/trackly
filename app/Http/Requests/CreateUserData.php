<?php

declare(strict_types=1);

namespace App\Http\Requests;

use Illuminate\Validation\Rule;
use Spatie\LaravelData\Data;

class CreateUserData extends Data
{
    public function __construct(
        public string $name,
        public string $email,
        public string $password,
        public string $passwordConfirm,
    ) {}

    public static function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'email' => [
                'required',
                'string',
                'email',
                'max:255',
                Rule::unique('users')->ignore(request()->route('user') ?? 0),
            ],
            'password' => ['required', 'string', 'min:8', 'max:50'],
            'passwordConfirm' => ['required', 'string', 'min:8', 'max:50', 'same:password'],
        ];
    }
}
