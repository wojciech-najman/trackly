<?php

declare(strict_types=1);

namespace App\Domains\Stock\Services;

use App\Domains\Stock\Models\Stock;
use App\Http\Requests\MoveStockData;
use App\Http\Requests\UpdateStockData;
use Exception;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Http\Request;

class StockService
{
    public function getStock(Request $request): LengthAwarePaginator
    {
        return Stock::orderBy('id', 'desc')
            ->filter($request)
            ->paginate(10)
            ->withQueryString();
    }

    public function updateStock(UpdateStockData $data, Stock $stock): void
    {
        $stock->update($data->all());
    }

    /**
     * @throws Exception
     */
    public function moveStock(MoveStockData $data, Stock $stock): void
    {
        app(DecreaseStockInStoreService::class)->decrease($stock, $data->quantity);

        app(IncreaseStockInStoreService::class)->increase(
            $data->store_id,
            $stock->item_id,
            $data->quantity
        );
    }

    public function deleteStock(Stock $stock): void
    {
        $stock->delete();
    }
}
