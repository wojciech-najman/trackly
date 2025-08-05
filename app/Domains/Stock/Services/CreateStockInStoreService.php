<?php

declare(strict_types=1);

namespace App\Domains\Stock\Services;

use App\Domains\Companies\Models\Company;
use App\Domains\Stock\Models\Stock;
use App\Http\Requests\StockData;

class CreateStockInStoreService
{
    public function create(StockData $stockData): void
    {
        $stock = Stock::whereStoreId($stockData->store_id)->whereItemId($stockData->item_id)->first(
        );

        if ($stock) {
            $stock->update(['quantity' => $stock->quantity + $stockData->quantity]);

            return;
        }

        Stock::create([
            'company_id' => Company::current()->id,
            ...$stockData->all(),
        ]);
    }
}
