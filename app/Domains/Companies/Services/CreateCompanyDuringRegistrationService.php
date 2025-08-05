<?php

declare(strict_types=1);

namespace App\Domains\Companies\Services;

use App\Domains\Companies\Enums\CompanyRoles;
use App\Domains\Companies\Models\Company;
use App\Domains\Companies\Models\CompanyRole;
use App\Domains\Companies\Models\CompanyUser;
use App\Domains\Users\Models\User;

class CreateCompanyDuringRegistrationService
{
    public function create(User $user): Company
    {
        $company = Company::create(['name' => 'My company ('.$user->name.')']);

        $companyRole = CompanyRole::firstOrCreate(['name' => CompanyRoles::ADMIN()->value]);

        CompanyUser::create([
            'company_id' => $company->id,
            'user_id' => $user->id,
            'company_role_id' => $companyRole->id,
            'active' => true,
        ]);

        return $company;
    }
}
