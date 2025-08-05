<?php

namespace App\Providers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\ServiceProvider;

class RulesServiceProvider extends ServiceProvider
{
    public function boot()
    {
        Validator::extend('current_password', function ($attribute, $value) {
            return ! Hash::check($value, Auth::user()->getAuthPassword());
        });

        Validator::extend('diff_password', function ($attribute, $value) {
            return ! Hash::check($value, Auth::user()->getAuthPassword());
        });

        Validator::extend('money', function ($attribute, $value) {
            return preg_match('/^\d{1,10}(\.\d{1,2})?$/', $value) === 1;
        });

        Validator::extend('in_stock', function ($attribute, $value) {
            $stock = request()->route('stock');

            return $stock->quantity >= $value;
        });
    }
}
