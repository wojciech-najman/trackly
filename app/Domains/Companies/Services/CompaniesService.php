<?php

declare(strict_types=1);

namespace App\Domains\Companies\Services;

use App\Domains\Companies\Enums\CompanyRoles;
use App\Domains\Companies\Models\Company;
use App\Domains\Companies\Models\CompanyRole;
use App\Domains\Companies\Models\CompanyUser;
use App\Domains\Users\Models\User;
use App\Http\Requests\CompanyData;
use App\Http\Requests\CompanySwitchData;
use App\Http\Requests\InviteUserData;
use Illuminate\Support\Facades\Auth;

class CompaniesService
{
    public function createCompany(CompanyData $data): Company
    {
        return Company::create($data->all());
    }

    public function deleteCompany(): void
    {
        CompanyUser::whereCompanyId(Company::current()->id)
            ->get()
            ->each(fn ($companyUser) => $companyUser->delete());

        Company::current()->delete();

        CompanyUser::whereUserId(Auth::user()->id)
            ->first()
            ?->company
            ?->makeCurrent();
    }

    public function switchCompany(CompanySwitchData $data): void
    {
        CompanyUser::whereUserId(Auth::user()->id)
            ->whereCompanyId($data->company_id)
            ->first()
            ->company
            ?->makeCurrent();
    }

    public function inviteUser(InviteUserData $data): void
    {
        $user = User::whereEmail($data->email)->first();

        $userCompany = CompanyUser::whereCompanyId(Company::current()->id)
            ->whereUserId($user->id)->first();

        $role = CompanyRole::whereName(CompanyRoles::USER->value)->first();

        if (! $userCompany) {
            CompanyUser::create([
                'company_id' => Company::current()->id,
                'company_role_id' => $role->id,
                'user_id' => $user->id,
                'active' => false,
            ]);
        }
    }
}
