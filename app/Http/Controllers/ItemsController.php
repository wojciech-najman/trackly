<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Domains\Actions\Services\ActionsService;
use App\Domains\Items\Models\Item;
use App\Domains\Items\Services\ItemsService;
use App\Domains\Tags\Services\TagsService;
use App\Http\Requests\ItemData;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;
use Inertia\Inertia;
use Inertia\Response;

use function redirect;

class ItemsController extends BaseController
{
    public function showItems(Request $request): Response
    {
        return Inertia::render('items', [
            'items' => app(ItemsService::class)->getItems($request),
            'tags' => app(TagsService::class)->getAllTags($request),
        ]);
    }

    public function createItem(ItemData $data): RedirectResponse
    {
        app(ItemsService::class)->createItem($data);

        return redirect()->to('/items');
    }

    public function showItemDetails(Request $request): Response
    {
        $item = app(ItemsService::class)->getItemsWithDetails($request);

        return Inertia::render('view-item', [
            'item' => $item,
            'actions' => app(ActionsService::class)->getLastItemActivity($item),
        ]);
    }

    public function editItem(Item $item): Response
    {
        return Inertia::render('edit-item', ['item' => $item]);
    }

    public function updateItem(ItemData $data, Item $item): RedirectResponse
    {
        app(ItemsService::class)->updateItem($item, $data);

        return redirect()->to('/items');
    }

    public function deleteItem(Item $item): RedirectResponse
    {
        app(ItemsService::class)->deleteItem($item);

        return redirect()->to('/items');
    }
}
