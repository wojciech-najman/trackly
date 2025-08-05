<?php

declare(strict_types=1);

namespace App\Http\Requests;

use Illuminate\Validation\Rule;
use Spatie\LaravelData\Data;

class TagData extends Data
{
    public function __construct(public string $name) {}

    public static function rules(): array
    {
        return [
            'name' => [
                'required',
                'string',
                'max:100',
                Rule::unique('tags')->ignore(request()->route('tag') ?? 0),
            ],
        ];
    }
}
