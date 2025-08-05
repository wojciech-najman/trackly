<?php

declare(strict_types=1);

namespace App\Http\Requests;

use Spatie\LaravelData\Attributes\Validation\Exists;
use Spatie\LaravelData\Attributes\Validation\Max;
use Spatie\LaravelData\Attributes\Validation\Min;
use Spatie\LaravelData\Data;

class StockData extends Data
{
    public function __construct(
        #[Exists('stores', 'id')]
        public int $store_id,
        #[Exists('items', 'id')]
        public int $item_id,
        #[Min(1), Max(1000000)]
        public int $quantity,
        #[Min(0), Max(1000000)]
        public int $low_stock,
    ) {}
}
