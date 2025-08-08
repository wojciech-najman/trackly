<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Domains\Items\Models\Item;
use App\Domains\Stock\Models\Stock;
use App\Domains\Stock\Services\CreateStockInStoreService;
use App\Domains\Stock\Services\StockService;
use App\Domains\Stores\Models\Store;
use App\Domains\Tags\Services\TagsService;
use App\Http\Requests\MoveStockData;
use App\Http\Requests\StockData;
use App\Http\Requests\UpdateStockData;
use Exception;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;
use Inertia\Inertia;
use Inertia\Response;

use function redirect;

class StockController extends BaseController
{
    public function showStock(Request $request): Response
    {
        return Inertia::render('stock', [
            'items' => app(StockService::class)->getStock($request),
            'tags' => app(TagsService::class)->getAllTags(),
        ]);
    }

    public function showCreateStock(): Response
    {
        return Inertia::render('create-stock', [
            'stores' => Store::orderBy('id')->get(),
            'items' => Item::orderBy('id')->get(),
        ]);
    }

    public function createStock(StockData $data): RedirectResponse
    {
        app(CreateStockInStoreService::class)->create($data);

        return redirect()->to('/stock');
    }

    public function showEditStock(Stock $stock): Response
    {
        return Inertia::render('edit-stock', [
            'stores' => Store::orderBy('id')->get(),
            'items' => Item::orderBy('id')->get(),
            'stock' => $stock,
        ]);
    }

    public function updateStock(UpdateStockData $data, Stock $stock): RedirectResponse
    {
        app(StockService::class)->updateStock($data, $stock);

        return redirect()->to('/stock');
    }

    public function showMoveStock(Stock $stock): Response
    {
        return Inertia::render('move-stock', [
            'stores' => Store::orderBy('id')->get(),
            'items' => Item::orderBy('id')->get(),
            'stock' => $stock,
        ]);
    }

    /**
     * @throws Exception
     */
    public function moveStock(MoveStockData $data, Stock $stock): RedirectResponse
    {
        app(StockService::class)->moveStock($data, $stock);

        return redirect()->to('/stock');
    }

    public function deleteStock(Stock $stock): RedirectResponse
    {
        app(StockService::class)->deleteStock($stock);

        return redirect()->to('/stock');
    }
}
