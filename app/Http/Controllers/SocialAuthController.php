<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Domains\Users\Services\UsersService;
use App\Providers\RouteServiceProvider;
use Illuminate\Routing\Controller as BaseController;
use Laravel\Socialite\Facades\Socialite;
use Symfony\Component\HttpFoundation\RedirectResponse;

class SocialAuthController extends BaseController
{
    public function redirect($provider): RedirectResponse
    {
        return Socialite::driver($provider)->redirect();
    }

    public function callback($provider): RedirectResponse
    {
        $userSocial = Socialite::driver($provider)->user();

        app(UsersService::class)->loginUserBySocialAuth($userSocial);

        return redirect()->intended(RouteServiceProvider::HOME);
    }
}
