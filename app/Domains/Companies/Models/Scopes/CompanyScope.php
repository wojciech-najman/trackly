<?php

declare(strict_types=1);

namespace App\Domains\Companies\Models\Scopes;

use App\Domains\Companies\Models\Company;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Scope;

class CompanyScope implements Scope
{
    public function apply(Builder $builder, Model $model)
    {
        $builder->where('company_id', Company::current()->id);
    }
}
