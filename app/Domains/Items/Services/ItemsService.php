<?php

declare(strict_types=1);

namespace App\Domains\Items\Services;

use App\Domains\Actions\Services\ItemActionsService;
use App\Domains\Companies\Models\Company;
use App\Domains\Items\Models\Item;
use App\Http\Requests\ItemData;
use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;

class ItemsService
{
    public function getItems(Request $request): LengthAwarePaginator
    {
        return Item::orderBy('id', 'desc')
            ->filter($request)
            ->paginate(10)
            ->withQueryString();
    }

    public function createItem(ItemData $itemData): void
    {
        $item = Item::create([
            'company_id' => Company::current()->id,
            ...$itemData->all(),
        ]);

        app(ItemActionsService::class)->itemCreated($item);
    }

    public function getItemsWithDetails(Request $request): Item
    {
        return Item::with('notes', 'stock', 'tags')->findOrFail($request->route('item'));
    }

    public function updateItem(Item $item, ItemData $data): void
    {
        $item->update($data->all());

        app(ItemActionsService::class)->itemUpdated($item);
    }

    public function deleteItem(Item $item): void
    {
        $item->delete();

        app(ItemActionsService::class)->itemDeleted($item);
    }
}
