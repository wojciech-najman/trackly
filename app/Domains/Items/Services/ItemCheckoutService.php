<?php

declare(strict_types=1);

namespace App\Domains\Items\Services;

use App\Domains\Companies\Models\Company;
use App\Domains\Items\Models\ItemCheckout;
use App\Domains\Stock\Models\Stock;
use App\Domains\Stock\Services\DecreaseStockInStoreService;
use App\Domains\Stock\Services\IncreaseStockInStoreService;
use App\Http\Requests\CheckoutData;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\Auth;

class ItemCheckoutService
{
    public function getItemCheckouts(Request $request): LengthAwarePaginator
    {
        return ItemCheckout::orderBy('id', 'desc')
            ->filter($request)
            ->paginate(10)
            ->withQueryString();
    }

    public function createItemCheckout(CheckoutData $data, Stock $stock): void
    {
        app(DecreaseStockInStoreService::class)->decrease($stock, $data->quantity);

        ItemCheckout::create([
            'company_id' => Company::current()->id,
            'store_id' => $stock->store_id,
            'item_id' => $stock->item_id,
            'quantity' => $data->quantity,
            'user_id' => Auth::user()->id,
            'date_from' => new Carbon,
        ]);
    }

    public function returnItemCheckout(ItemCheckout $itemCheckout): void
    {
        app(IncreaseStockInStoreService::class)->increase(
            $itemCheckout->store_id,
            $itemCheckout->item_id,
            $itemCheckout->quantity,
        );

        $itemCheckout->update(['date_to' => new Carbon]);
    }
}
