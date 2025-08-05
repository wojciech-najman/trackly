<?php

declare(strict_types=1);

namespace App\Domains\Users\Services;

use App\Domains\Actions\Services\UserActionsService;
use App\Domains\Companies\Services\CreateCompanyDuringRegistrationService;
use App\Domains\Users\Models\User;
use Auth;
use Illuminate\Support\Facades\Hash;

class UsersService
{
    public function loginUserBySocialAuth(\Laravel\Socialite\Contracts\User $userSocial): User
    {
        $user = User::whereEmail($userSocial->getEmail())->first();

        if (! $user) {
            $user = User::create([
                'name' => $userSocial->getName(),
                'email' => $userSocial->getEmail(),
                'password' => Hash::make(uniqid()),
            ]);

            app(CreateCompanyDuringRegistrationService::class)->create($user);

            app(UserActionsService::class)->userRegistered($user);
        }

        Auth::login($user);

        return $user;
    }
}
