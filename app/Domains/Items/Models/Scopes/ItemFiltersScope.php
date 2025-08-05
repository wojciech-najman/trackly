<?php

declare(strict_types=1);

namespace App\Domains\Items\Models\Scopes;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

trait ItemFiltersScope
{
    public function scopeFilter(Builder $builder, Request $request): Builder
    {
        if ($request->get('search')) {
            $builder->where(function (Builder $query) use ($request) {
                $query->where('name', 'ILIKE', '%'.$request->get('search').'%')
                    ->orWhere('description', 'ILIKE', '%'.$request->get('search').'%')
                    ->orWhere('code', 'ILIKE', '%'.$request->get('search').'%');
            });
        }

        if ($request->get('tag')) {
            $builder->whereHas('tags', function (Builder $query) use ($request) {
                $query->where('tag_id', '=', $request->get('tag'));
            });
        }

        return $builder;
    }
}
