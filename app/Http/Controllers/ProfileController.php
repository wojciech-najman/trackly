<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Domains\Users\Services\ProfileService;
use App\Http\Requests\PasswordData;
use App\Http\Requests\ProfileData;
use Illuminate\Http\RedirectResponse;
use Illuminate\Routing\Controller as BaseController;

use function redirect;

class ProfileController extends BaseController
{
    public function updateAccount(ProfileData $data): RedirectResponse
    {
        app(ProfileService::class)->updateAccount($data);

        return redirect()->to('/profile');
    }

    public function updatePassword(PasswordData $data): RedirectResponse
    {
        app(ProfileService::class)->updatePassword($data);

        return redirect()->to('/profile');
    }
}
