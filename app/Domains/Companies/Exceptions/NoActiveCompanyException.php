<?php

declare(strict_types=1);

namespace App\Domains\Companies\Exceptions;

use App\Providers\RouteServiceProvider;
use Illuminate\Http\RedirectResponse;
use Spatie\Multitenancy\Exceptions\NoCurrentTenant;

class NoActiveCompanyException extends NoCurrentTenant
{
    public function render(): RedirectResponse
    {
        return redirect(RouteServiceProvider::LOGIN)->withErrors([
            'error' => $this->getMessage(),
        ]);
    }
}
