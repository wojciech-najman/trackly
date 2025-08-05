<?php

declare(strict_types=1);

namespace App\Domains\Users\Services;

use App\Domains\Actions\Services\UserActionsService;
use App\Http\Requests\PasswordData;
use App\Http\Requests\ProfileData;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class ProfileService
{
    public function updateAccount(ProfileData $data): void
    {
        Auth::user()->update($data->all());

        app(UserActionsService::class)->userUpdatedHisAccount(Auth::user());
    }

    public function updatePassword(PasswordData $data): void
    {
        Auth::user()->update(['password' => Hash::make($data->password)]);

        app(UserActionsService::class)->userChangedHisPassword(Auth::user());
    }
}
