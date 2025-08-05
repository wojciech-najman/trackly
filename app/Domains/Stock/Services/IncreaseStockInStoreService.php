<?php

declare(strict_types=1);

namespace App\Domains\Stock\Services;

use App\Domains\Companies\Models\Company;
use App\Domains\Stock\Models\Stock;

class IncreaseStockInStoreService
{
    public function increase(int $storeId, int $itemId, int $quantity): void
    {
        $stock = Stock::whereStoreId($storeId)->whereItemId($itemId)->first();

        if ($stock) {
            $stock->update(['quantity' => $stock->quantity + $quantity]);

            return;
        }

        Stock::create([
            'company_id' => Company::current()->id,
            'store_id' => $storeId,
            'item_id' => $itemId,
            'quantity' => $quantity,
            'low_stock' => 0,
        ]);
    }
}
