<?php

declare(strict_types=1);

namespace App\Domains\Items\Services;

use App\Domains\Actions\Services\ItemActionsService;
use App\Domains\Companies\Models\Company;
use App\Domains\Items\Models\Item;
use App\Domains\Items\Models\ItemNote;
use App\Http\Requests\ItemNoteData;
use Illuminate\Support\Facades\Auth;

class ItemNotesService
{
    public function createNote(ItemNoteData $data, Item $item): void
    {
        ItemNote::create([
            'company_id' => Company::current()->id,
            'item_id' => $item->id,
            'note' => $data->note,
            'user_id' => Auth::user()->getAuthIdentifier(),
        ]);

        app(ItemActionsService::class)->itemNoteCreated($item);
    }

    public function updateNote(ItemNoteData $data, Item $item, ItemNote $itemNote): void
    {
        $itemNote->update($data->all());

        app(ItemActionsService::class)->itemNoteUpdated($item);
    }

    public function deleteNote(ItemNote $itemNote, Item $item): void
    {
        $itemNote->delete();

        app(ItemActionsService::class)->itemNoteDeleted($item);
    }
}
