<?php

namespace App\Http\Middleware;

use App\Domains\Companies\Exceptions\NoActiveCompanyException;
use App\Domains\Companies\Models\CompanyUser;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Spatie\Multitenancy\Exceptions\NoCurrentTenant;

class HandleActiveCompany
{
    /**
     * Handle an incoming request.
     *
     * @throws NoCurrentTenant
     */
    public function handle(Request $request, Closure $next): mixed
    {
        if (! Auth::check()) {
            return $next($request);
        }

        $userCompanies = CompanyUser::whereUserId(Auth::user()->id)->get();

        if ($userCompanies->isEmpty()) {
            Auth::logout();

            throw new NoActiveCompanyException('User is not assigned to any company');
        }

        $activeCompany = $userCompanies->first(fn ($company) => $company->active);

        if (! $activeCompany) {
            Auth::logout();

            throw new NoActiveCompanyException('There is no active company for given user');
        }

        $activeCompany->company->makeCurrent();

        return $next($request);
    }
}
