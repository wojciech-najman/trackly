<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Domains\Stores\Models\Store;
use App\Domains\Stores\Services\StoresService;
use App\Http\Requests\StoreData;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;
use Inertia\Inertia;
use Inertia\Response;

use function redirect;

class StoresController extends BaseController
{
    public function showStores(Request $request): Response
    {
        return Inertia::render('stores', [
            'items' => app(StoresService::class)->getStores($request),
        ]);
    }

    public function createStore(StoreData $data): RedirectResponse
    {
        app(StoresService::class)->createStore($data);

        return redirect()->to('/stores');
    }

    public function showEditStore(Store $store): Response
    {
        return Inertia::render('edit-store', ['store' => $store]);
    }

    public function editStore(StoreData $data, Store $store): RedirectResponse
    {
        app(StoresService::class)->editStore($data, $store);

        return redirect()->to('/stores');
    }

    public function deleteStore(Store $store): RedirectResponse
    {
        app(StoresService::class)->deleteStore($store);

        return redirect()->to('/stores');
    }
}
