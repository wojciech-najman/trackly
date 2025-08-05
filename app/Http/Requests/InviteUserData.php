<?php

declare(strict_types=1);

namespace App\Http\Requests;

use Spatie\LaravelData\Attributes\Validation\Email;
use Spatie\LaravelData\Attributes\Validation\Exists;
use Spatie\LaravelData\Data;

class InviteUserData extends Data
{
    public function __construct(
        #[Email, Exists('users', 'email')]
        public string $email
    ) {}
}
