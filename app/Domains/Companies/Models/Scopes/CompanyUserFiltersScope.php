<?php

declare(strict_types=1);

namespace App\Domains\Companies\Models\Scopes;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

trait CompanyUserFiltersScope
{
    public function scopeFilter(Builder $builder, Request $request): Builder
    {
        if ($request->get('search')) {
            $builder->where(function (Builder $query) use ($request) {
                $query->whereHas('user', function (Builder $query) use ($request) {
                    $query->where('name', 'ILIKE', '%'.$request->get('search').'%');
                })->orWhereHas('user', function (Builder $query) use ($request) {
                    $query->where('email', 'ILIKE', '%'.$request->get('search').'%');
                });
            });
        }

        return $builder;
    }
}
