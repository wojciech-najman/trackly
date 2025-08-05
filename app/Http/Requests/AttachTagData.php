<?php

declare(strict_types=1);

namespace App\Http\Requests;

use Spatie\LaravelData\Attributes\Validation\Exists;
use Spatie\LaravelData\Data;

class AttachTagData extends Data
{
    public function __construct(
        #[Exists('tags', 'id')]
        public int $tag_id
    ) {}
}
