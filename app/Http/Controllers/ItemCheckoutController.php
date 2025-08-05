<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Domains\Items\Models\ItemCheckout;
use App\Domains\Items\Services\ItemCheckoutService;
use App\Domains\Stock\Models\Stock;
use App\Http\Requests\CheckoutData;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;
use Inertia\Inertia;
use Inertia\Response;

use function redirect;

class ItemCheckoutController extends BaseController
{
    public function showItemCheckouts(Request $request): Response
    {
        return Inertia::render('checkouts', [
            'items' => app(ItemCheckoutService::class)->getItemCheckouts($request),
        ]);
    }

    public function showCreateItemCheckout(Stock $stock): Response
    {
        return Inertia::render('create-checkout', ['stock' => $stock]);
    }

    public function createItemCheckout(CheckoutData $data, Stock $stock): RedirectResponse
    {
        app(ItemCheckoutService::class)->createItemCheckout($data, $stock);

        return redirect()->to('/checkouts');
    }

    public function returnItemCheckout(ItemCheckout $itemCheckout): RedirectResponse
    {
        app(ItemCheckoutService::class)->returnItemCheckout($itemCheckout);

        return redirect()->to('/checkouts');
    }
}
