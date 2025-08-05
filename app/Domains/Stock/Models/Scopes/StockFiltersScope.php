<?php

declare(strict_types=1);

namespace App\Domains\Stock\Models\Scopes;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

trait StockFiltersScope
{
    public function scopeFilter(Builder $builder, Request $request): Builder
    {
        if ($request->get('search')) {
            $builder->where(function (Builder $query) use ($request) {
                $query->whereHas('store', function (Builder $query) use ($request) {
                    $query->where('name', 'ILIKE', '%'.$request->get('search').'%');
                })->orWhereHas('item', function (Builder $query) use ($request) {
                    $query->where('name', 'ILIKE', '%'.$request->get('search').'%');
                });
            });
        }

        if ($request->get('tag')) {
            $builder->whereHas('tags', function (Builder $query) use ($request) {
                $query->where('tag_id', '=', $request->get('tag'));
            });
        }

        if ($request->get('low_stock')) {
            $builder->whereRaw('quantity <= low_stock');
        }

        return $builder;
    }
}
