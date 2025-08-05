<?php

declare(strict_types=1);

namespace App\Http\Requests;

use Spatie\LaravelData\Attributes\Validation\Max;
use Spatie\LaravelData\Data;

class CompanyData extends Data
{
    public function __construct(
        #[Max(100)]
        public string $name
    ) {}
}
