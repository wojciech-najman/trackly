<?php

namespace App\Providers;

use App\Domains\Companies\Enums\CompanyRoles;
use App\Domains\Companies\Models\Company;
use App\Domains\Companies\Models\CompanyUser;
use App\Domains\Users\Models\User;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [];

    /**
     * Register any authentication / authorization services.
     */
    public function boot(): void
    {
        $this->registerPolicies();

        Gate::define('is-admin', function (User $user) {
            $role = CompanyUser::whereUserId($user->id)
                ->whereCompanyId(Company::current()->id)
                ->first()
                ?->role;

            return $role->name === CompanyRoles::ADMIN()->value;
        });
    }
}
