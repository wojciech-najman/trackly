<?php

declare(strict_types=1);

namespace App\Http\Requests;

use Spatie\LaravelData\Attributes\Validation\Max;
use Spatie\LaravelData\Attributes\Validation\Min;
use Spatie\LaravelData\Attributes\Validation\Same;
use Spatie\LaravelData\Data;

class UserPasswordData extends Data
{
    public function __construct(
        #[Min(8), Max(50)]
        public string $password,
        #[Same('password'), Min(8), Max(50)]
        public string $passwordConfirm,
    ) {}
}
