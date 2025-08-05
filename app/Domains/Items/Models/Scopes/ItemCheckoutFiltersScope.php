<?php

declare(strict_types=1);

namespace App\Domains\Items\Models\Scopes;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

trait ItemCheckoutFiltersScope
{
    public function scopeFilter(Builder $builder, Request $request): Builder
    {
        if ($request->get('search')) {
            $builder->where(function (Builder $query) use ($request) {
                $query->whereHas('store', function (Builder $query) use ($request) {
                    $query->where('name', 'ILIKE', '%'.$request->get('search').'%');
                })->orWhereHas('item', function (Builder $query) use ($request) {
                    $query->where('name', 'ILIKE', '%'.$request->get('search').'%');
                })->orWhereHas('user', function (Builder $query) use ($request) {
                    $query->where('name', 'ILIKE', '%'.$request->get('search').'%');
                });
            });
        }

        return $builder;
    }
}
