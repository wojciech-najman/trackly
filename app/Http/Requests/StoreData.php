<?php

declare(strict_types=1);

namespace App\Http\Requests;

use Illuminate\Validation\Rule;
use Spatie\LaravelData\Data;

class StoreData extends Data
{
    public function __construct(public string $name, public string $description) {}

    public static function rules(): array
    {
        return [
            'name' => [
                'required',
                'string',
                'max:100',
                Rule::unique('stores')->ignore(request()->route('store') ?? 0),
            ],
            'description' => ['required', 'string'],
        ];
    }
}
