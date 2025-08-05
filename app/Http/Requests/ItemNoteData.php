<?php

declare(strict_types=1);

namespace App\Http\Requests;

use Spatie\LaravelData\Data;

class ItemNoteData extends Data
{
    public function __construct(public string $note) {}
}
