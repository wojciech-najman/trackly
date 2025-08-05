<?php

declare(strict_types=1);

namespace App\Domains\Stock\Services;

use App\Domains\Stock\Models\Stock;
use Exception;

class DecreaseStockInStoreService
{
    /**
     * @throws Exception
     */
    public function decrease(Stock $stock, int $quantity): void
    {
        if ($stock->quantity < $quantity) {
            throw new Exception('Quantity to decrease is greater than stock quantity');
        }

        if ($stock->quantity === $quantity) {
            $stock->delete();

            return;
        }

        $stock->update(['quantity' => $stock->quantity - $quantity]);
    }
}
