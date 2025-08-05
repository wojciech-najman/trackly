<?php

declare(strict_types=1);

namespace App\Http\Requests;

use Spatie\LaravelData\Attributes\Validation\Max;
use Spatie\LaravelData\Attributes\Validation\Min;
use Spatie\LaravelData\Attributes\Validation\Rule;
use Spatie\LaravelData\Data;

class CheckoutData extends Data
{
    public function __construct(
        #[Min(1), Max(1000000), Rule(['in_stock'])]
        public int $quantity,
    ) {}
}
