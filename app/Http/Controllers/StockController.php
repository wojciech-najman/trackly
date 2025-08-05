<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Domains\Items\Models\Item;
use App\Domains\Stock\Models\Stock;
use App\Domains\Stock\Services\CreateStockInStoreService;
use App\Domains\Stock\Services\DecreaseStockInStoreService;
use App\Domains\Stock\Services\IncreaseStockInStoreService;
use App\Domains\Stores\Models\Store;
use App\Domains\Tags\Models\Tag;
use App\Http\Requests\MoveStockData;
use App\Http\Requests\StockData;
use App\Http\Requests\UpdateStockData;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;
use Inertia\Inertia;
use Inertia\Response;

use function redirect;

class StockController extends BaseController
{
    public function index(Request $request): Response
    {
        return Inertia::render('stock', [
            'items' => Stock::orderBy('id', 'desc')
                ->filter($request)
                ->paginate(10)
                ->withQueryString(),
            'tags' => Tag::all(),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('create-stock', [
            'stores' => Store::orderBy('id')->get(),
            'items' => Item::orderBy('id')->get(),
        ]);
    }

    public function store(StockData $stockData): RedirectResponse
    {
        app(CreateStockInStoreService::class)->create($stockData);

        return redirect()->to('/stock');
    }

    public function edit(Stock $stock): Response
    {
        return Inertia::render('edit-stock', [
            'stores' => Store::orderBy('id')->get(),
            'items' => Item::orderBy('id')->get(),
            'stock' => $stock,
        ]);
    }

    public function update(UpdateStockData $updateStockData, Stock $stock): RedirectResponse
    {
        $stock->update($updateStockData->all());

        return redirect()->to('/stock');
    }

    public function moveIndex(Stock $stock): Response
    {
        return Inertia::render('move-stock', [
            'stores' => Store::orderBy('id')->get(),
            'items' => Item::orderBy('id')->get(),
            'stock' => $stock,
        ]);
    }

    public function move(MoveStockData $moveStockData, Stock $stock): RedirectResponse
    {
        app(DecreaseStockInStoreService::class)->decrease($stock, $moveStockData->quantity);

        app(IncreaseStockInStoreService::class)->increase(
            $moveStockData->store_id,
            $stock->item_id,
            $moveStockData->quantity
        );

        return redirect()->to('/stock');
    }

    public function delete(Stock $stock): RedirectResponse
    {
        $stock->delete();

        return redirect()->to('/stock');
    }
}
