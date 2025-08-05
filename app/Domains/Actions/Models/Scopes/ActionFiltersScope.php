<?php

declare(strict_types=1);

namespace App\Domains\Actions\Models\Scopes;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

trait ActionFiltersScope
{
    public function scopeFilter(Builder $builder, Request $request): Builder
    {
        if ($request->get('search')) {
            $builder->where(function (Builder $query) use ($request) {
                $query->where('description', 'LIKE', '%'.$request->get('search').'%')
                    ->orWhereHas('user', function (Builder $query) use ($request) {
                        $query->where('name', 'LIKE', '%'.$request->get('search').'%');
                    });
            });
        }

        return $builder;
    }
}
