<?php

declare(strict_types=1);

namespace App\Domains\Actions\Services;

use App\Domains\Actions\Enums\ActionTypes;
use App\Domains\Actions\Models\Action;
use App\Domains\Companies\Models\Company;
use App\Domains\Items\Models\Item;
use Illuminate\Support\Facades\Auth;

class ItemActionsService
{
    public function itemCreated(Item $item): void
    {
        Action::create([
            'company_id' => Company::current()->id,
            'model' => Item::class,
            'model_id' => $item->id,
            'type' => ActionTypes::ITEM_CREATED->value,
            'description' => 'Item <b>'.$item->name.'</b> was created',
            'user_id' => Auth::user()->id,
        ]);
    }

    public function itemUpdated(Item $item): void
    {
        Action::create([
            'company_id' => Company::current()->id,
            'model' => Item::class,
            'model_id' => $item->id,
            'type' => ActionTypes::ITEM_UPDATED->value,
            'description' => 'Item <b>'.$item->name.'</b> was updated',
            'user_id' => Auth::user()->id,
        ]);
    }

    public function itemDeleted(Item $item): void
    {
        Action::create([
            'company_id' => Company::current()->id,
            'model' => Item::class,
            'model_id' => $item->id,
            'type' => ActionTypes::ITEM_DELETED->value,
            'description' => 'Item <b>'.$item->name.'</b> was deleted',
            'user_id' => Auth::user()->id,
        ]);
    }

    public function itemNoteCreated(Item $item): void
    {
        Action::create([
            'company_id' => Company::current()->id,
            'model' => Item::class,
            'model_id' => $item->id,
            'type' => ActionTypes::ITEM_NOTE_CREATED->value,
            'description' => 'Note was added to item: <b>'.$item->name.'</b>',
            'user_id' => Auth::user()->id,
        ]);
    }

    public function itemNoteUpdated(Item $item): void
    {
        Action::create([
            'company_id' => Company::current()->id,
            'model' => Item::class,
            'model_id' => $item->id,
            'type' => ActionTypes::ITEM_NOTE_UPDATED->value,
            'description' => 'Note was updated in item: <b>'.$item->name.'</b>',
            'user_id' => Auth::user()->id,
        ]);
    }

    public function itemNoteDeleted(Item $item): void
    {
        Action::create([
            'company_id' => Company::current()->id,
            'model' => Item::class,
            'model_id' => $item->id,
            'type' => ActionTypes::ITEM_NOTE_DELETED->value,
            'description' => 'Note was deleted in item: <b>'.$item->name.'</b>',
            'user_id' => Auth::user()->id,
        ]);
    }
}
