<?php

declare(strict_types=1);

namespace App\Domains\Stores\Services;

use App\Domains\Actions\Services\StoreActionsService;
use App\Domains\Companies\Models\Company;
use App\Domains\Stores\Models\Store;
use App\Http\Requests\StoreData;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Http\Request;

class StoresService
{
    public function getStores(Request $request): LengthAwarePaginator
    {
        return Store::orderBy('id', 'desc')
            ->filter($request)
            ->paginate(10)
            ->withQueryString();
    }

    public function createStore(StoreData $data): void
    {
        $store = Store::create([
            'company_id' => Company::current()->id,
            ...$data->all(),
        ]);

        app(StoreActionsService::class)->storeCreated($store);
    }

    public function editStore(StoreData $data, Store $store): void
    {
        $store->update($data->all());

        app(StoreActionsService::class)->storeUpdated($store);
    }

    public function deleteStore(Store $store): void
    {
        $store->delete();

        app(StoreActionsService::class)->storeDeleted($store);
    }
}
