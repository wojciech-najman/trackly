<?php

declare(strict_types=1);

namespace App\Domains\Actions\Services;

use App\Domains\Actions\Enums\ActionTypes;
use App\Domains\Actions\Models\Action;
use App\Domains\Companies\Models\Company;
use App\Domains\Stores\Models\Store;
use Illuminate\Support\Facades\Auth;

class StoreActionsService
{
    public function storeCreated(Store $store): void
    {
        Action::create([
            'company_id' => Company::current()->id,
            'model' => Store::class,
            'model_id' => $store->id,
            'type' => ActionTypes::STORE_CREATED->value,
            'description' => 'Store <b>'.$store->name.'</b> was created',
            'user_id' => Auth::user()->id,
        ]);
    }

    public function storeUpdated(Store $store): void
    {
        Action::create([
            'company_id' => Company::current()->id,
            'model' => Store::class,
            'model_id' => $store->id,
            'type' => ActionTypes::STORE_UPDATED->value,
            'description' => 'Store <b>'.$store->name.'</b> was updated',
            'user_id' => Auth::user()->id,
        ]);
    }

    public function storeDeleted(Store $store): void
    {
        Action::create([
            'company_id' => Company::current()->id,
            'model' => Store::class,
            'model_id' => $store->id,
            'type' => ActionTypes::STORE_DELETED->value,
            'description' => 'Store <b>'.$store->name.'</b> was deleted',
            'user_id' => Auth::user()->id,
        ]);
    }
}
