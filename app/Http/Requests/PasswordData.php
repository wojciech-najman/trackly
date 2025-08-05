<?php

declare(strict_types=1);

namespace App\Http\Requests;

use Spatie\LaravelData\Attributes\Validation\Max;
use Spatie\LaravelData\Attributes\Validation\Min;
use Spatie\LaravelData\Attributes\Validation\Rule;
use Spatie\LaravelData\Attributes\Validation\Same;
use Spatie\LaravelData\Data;

class PasswordData extends Data
{
    public function __construct(
        #[Rule('current_password'), Min(8), Max(50)]
        public string $oldPassword,
        #[Rule('diff_password'), Min(8), Max(50)]
        public string $password,
        #[Same('password'), Min(8), Max(50)]
        public string $passwordConfirm,
    ) {}
}
