<?php

declare(strict_types=1);

namespace App\Domains\Tags\Services;

use App\Domains\Tags\Models\Tag;
use Illuminate\Database\Eloquent\Collection;

class TagsService
{
    public function getTags(): Collection
    {
        return Tag::all();
    }
}
