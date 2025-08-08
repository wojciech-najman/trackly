<?php

namespace App\Domains\Users\Services;

use App\Domains\Actions\Services\UserActionsService;
use App\Domains\Companies\Services\CreateCompanyDuringRegistrationService;
use App\Domains\Users\Models\User;
use App\Domains\Users\Validations\PasswordValidationRules;
use Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Laravel\Fortify\Contracts\CreatesNewUsers;

class RegisterUserService implements CreatesNewUsers
{
    use PasswordValidationRules;

    public function createUser(array $input): User
    {
        Validator::make($input, [
            'name' => ['required', 'string', 'max:255'],
            'email' => [
                'required',
                'string',
                'email',
                'max:255',
                Rule::unique(User::class),
            ],
            'password' => $this->passwordRules(),
        ])->validate();

        $user = User::create([
            'name' => $input['name'],
            'email' => $input['email'],
            'password' => Hash::make($input['password']),
        ]);

        $company = app(CreateCompanyDuringRegistrationService::class)->create($user);

        Auth::login($user);

        $company->makeCurrent();

        app(UserActionsService::class)->userRegistered($user);

        return $user;
    }

    public function create(array $input): User
    {
        return $this->createUser($input);
    }
}
