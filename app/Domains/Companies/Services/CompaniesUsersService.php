<?php

declare(strict_types=1);

namespace App\Domains\Companies\Services;

use App\Domains\Companies\Enums\CompanyRoles;
use App\Domains\Companies\Models\Company;
use App\Domains\Companies\Models\CompanyRole;
use App\Domains\Companies\Models\CompanyUser;
use Illuminate\Support\Facades\Auth;

class CompaniesUsersService
{
    public function createAdminRole(Company $company): CompanyUser
    {
        $role = CompanyRole::whereName(CompanyRoles::ADMIN->value)->first();

        return CompanyUser::create([
            'company_id' => $company->id,
            'company_role_id' => $role->id,
            'user_id' => Auth::user()->id,
            'active' => false,
        ]);
    }
}
