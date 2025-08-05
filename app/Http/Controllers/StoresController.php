<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Domains\Actions\Services\StoreActionsService;
use App\Domains\Companies\Models\Company;
use App\Domains\Stores\Models\Store;
use App\Http\Requests\StoreData;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;
use Inertia\Inertia;
use Inertia\Response;

use function redirect;

class StoresController extends BaseController
{
    public function index(Request $request): Response
    {
        return Inertia::render('stores', [
            'items' => Store::orderBy('id', 'desc')
                ->filter($request)
                ->paginate(10)
                ->withQueryString(),
        ]);
    }

    public function store(StoreData $storeData): RedirectResponse
    {
        $store = Store::create([
            'company_id' => Company::current()->id,
            ...$storeData->all(),
        ]);

        app(StoreActionsService::class)->storeCreated($store);

        return redirect()->to('/stores');
    }

    public function edit(Store $store): Response
    {
        return Inertia::render('edit-store', ['store' => $store]);
    }

    public function update(StoreData $storeData, Store $store): RedirectResponse
    {
        $store->update($storeData->all());

        app(StoreActionsService::class)->storeUpdated($store);

        return redirect()->to('/stores');
    }

    public function delete(Store $store): RedirectResponse
    {
        $store->delete();

        app(StoreActionsService::class)->storeDeleted($store);

        return redirect()->to('/stores');
    }
}
