<?php

declare(strict_types=1);

namespace App\Domains\Actions\Services;

use App\Domains\Actions\Models\Action;
use App\Domains\Items\Models\Item;
use Illuminate\Contracts\Pagination\Paginator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ActionsService
{
    public function getActions(Request $request): Paginator
    {
        return Action::orderBy('id', 'desc')
            ->filter($request)
            ->paginate(10)
            ->withQueryString();
    }

    public function getRecentActivity(): Paginator
    {
        return Action::orderBy('id', 'desc')->paginate(6);
    }

    public function getMyRecentActivity(): Paginator
    {
        return Action::whereUserId(Auth::user()->id)->orderBy(
            'id',
            'desc'
        )->paginate(6);
    }

    public function getLastItemActivity(Item $item): Paginator
    {
        return Action::whereModel(Item::class)->whereModelId($item->id)->orderBy(
            'id',
            'desc'
        )->paginate(8);
    }
}
