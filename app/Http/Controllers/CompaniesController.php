<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Domains\Companies\Models\Company;
use App\Domains\Companies\Models\CompanyUser;
use App\Domains\Companies\Services\CompaniesService;
use App\Domains\Companies\Services\CompaniesUsersService;
use App\Http\Requests\CompanyData;
use App\Http\Requests\CompanySwitchData;
use App\Http\Requests\InviteUserData;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\RedirectResponse;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

use function redirect;

class CompaniesController extends BaseController
{
    public function createCompany(CompanyData $data): RedirectResponse
    {
        $company = app(CompaniesService::class)->createCompany($data);

        app(CompaniesUsersService::class)->createAdminRole($company);

        $company->makeCurrent();

        return redirect()->to(RouteServiceProvider::HOME);
    }

    public function updateCompany(CompanyData $companyData): RedirectResponse
    {
        Company::current()->update($companyData->all());

        return redirect()->to('/company/edit');
    }

    public function deleteCompany(): RedirectResponse
    {
        app(CompaniesService::class)->deleteCompany();

        return redirect()->to(RouteServiceProvider::HOME);
    }

    public function showCompanySwitchPage(): Response
    {
        return Inertia::render('switch-company', [
            'userCompanies' => CompanyUser::whereUserId(Auth::user()->id)->get(),
        ]);
    }

    public function switchCompany(CompanySwitchData $data): RedirectResponse
    {
        app(CompaniesService::class)->switchCompany($data);

        return redirect()->to(RouteServiceProvider::HOME);
    }

    public function inviteUser(InviteUserData $data): RedirectResponse
    {
        app(CompaniesService::class)->inviteUser($data);

        return redirect()->to('/users');
    }
}
