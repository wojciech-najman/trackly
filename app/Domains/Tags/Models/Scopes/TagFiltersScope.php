<?php

declare(strict_types=1);

namespace App\Domains\Tags\Models\Scopes;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

trait TagFiltersScope
{
    public function scopeFilter(Builder $builder, Request $request): Builder
    {
        if ($request->get('search')) {
            $builder->where('name', 'ILIKE', '%'.$request->get('search').'%');
        }

        return $builder;
    }
}
