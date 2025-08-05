<?php

declare(strict_types=1);

namespace App\Http\Requests;

use Spatie\LaravelData\Attributes\Validation\Exists;
use Spatie\LaravelData\Data;

class CompanySwitchData extends Data
{
    public function __construct(
        #[Exists('companies', 'id')]
        public string $company_id
    ) {}
}
