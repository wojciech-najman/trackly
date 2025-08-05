<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Domains\Items\Models\Item;
use App\Domains\Items\Models\ItemNote;
use App\Domains\Items\Services\ItemNotesService;
use App\Http\Requests\ItemNoteData;
use Illuminate\Http\RedirectResponse;
use Illuminate\Routing\Controller as BaseController;

use function redirect;

class ItemsNotesController extends BaseController
{
    public function store(ItemNoteData $data, Item $item): RedirectResponse
    {
        app(ItemNotesService::class)->createNote($data, $item);

        return redirect()->to('/items/'.$item->id);
    }

    public function update(
        ItemNoteData $data,
        Item $item,
        ItemNote $itemNote
    ): RedirectResponse {
        app(ItemNotesService::class)->updateNote($data, $item, $itemNote);

        return redirect()->to('/items/'.$item->id);
    }

    public function delete(Item $item, ItemNote $itemNote): RedirectResponse
    {
        app(ItemNotesService::class)->delete($item, $itemNote);

        return redirect()->to('/items/'.$item->id);
    }
}
