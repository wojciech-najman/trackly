<?php

declare(strict_types=1);

namespace App\Http\Requests;

use Spatie\LaravelData\Attributes\Validation\Exists;
use Spatie\LaravelData\Attributes\Validation\Numeric;
use Spatie\LaravelData\Data;
use Symfony\Contracts\Service\Attribute\Required;

class UserRole extends Data
{
    public function __construct(
        #[Required, Numeric, Exists('company_roles', 'id')]
        public int $role
    ) {}
}
