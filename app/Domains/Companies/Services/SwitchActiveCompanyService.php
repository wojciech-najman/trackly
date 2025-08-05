<?php

declare(strict_types=1);

namespace App\Domains\Companies\Services;

use App\Domains\Companies\Models\Company;
use App\Domains\Companies\Models\CompanyUser;
use Illuminate\Support\Facades\Auth;
use Spatie\Multitenancy\Models\Tenant;
use Spatie\Multitenancy\Tasks\SwitchTenantTask;

class SwitchActiveCompanyService implements SwitchTenantTask
{
    public function makeCurrent(Tenant $tenant): void
    {
        CompanyUser::whereUserId(Auth::user()->id)
            ->whereCompanyId($tenant->id)
            ->first()
            ?->update(['active' => true]);
    }

    public function forgetCurrent(): void
    {
        CompanyUser::whereUserId(Auth::user()->id)
            ->whereCompanyId(Company::current()->id)
            ->first()
            ?->update(['active' => false]);
    }
}
