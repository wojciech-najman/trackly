<?php

declare(strict_types=1);

namespace App\Domains\Stores\Models\Scopes;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

trait StoreFiltersScope
{
    public function scopeFilter(Builder $builder, Request $request): Builder
    {
        if ($request->get('search')) {
            $builder->where(function (Builder $query) use ($request) {
                $query->where('name', 'ILIKE', '%'.$request->get('search').'%')
                    ->orWhere('description', 'ILIKE', '%'.$request->get('search').'%');
            });
        }

        return $builder;
    }
}
