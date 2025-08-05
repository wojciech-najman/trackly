<?php

declare(strict_types=1);

namespace App\Http\Requests;

use Illuminate\Validation\Rule;
use Spatie\LaravelData\Data;

class ItemData extends Data
{
    public function __construct(
        public string $name,
        public string $description,
        public string $code,
        public float $price,
    ) {}

    public static function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:100'],
            'description' => ['required', 'string'],
            'code' => [
                'required',
                'string',
                'max:100',
                Rule::unique('items')->ignore(request()->route('item') ?? 0),
            ],
            'price' => ['required', 'money'],
        ];
    }
}
