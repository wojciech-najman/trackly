<?php

namespace App\Providers;

use App\Domains\Users\Services\RegisterUserService;
use App\Domains\Users\Services\ResetUserPasswordService;
use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\ServiceProvider;
use Laravel\Fortify\Fortify;

class FortifyServiceProvider extends ServiceProvider
{
    public function register() {}

    public function boot()
    {
        Fortify::createUsersUsing(RegisterUserService::class);
        Fortify::resetUserPasswordsUsing(ResetUserPasswordService::class);

        RateLimiter::for('login', function (Request $request) {
            return Limit::perMinute(5)->by($request->email.$request->ip());
        });

        RateLimiter::for('two-factor', function (Request $request) {
            return Limit::perMinute(5)->by($request->session()->get('login.id'));
        });
    }
}
