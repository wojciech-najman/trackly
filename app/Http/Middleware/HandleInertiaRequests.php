<?php

namespace App\Http\Middleware;

use App\Domains\Companies\Models\CompanyUser;
use App\Domains\Items\Models\Item;
use App\Domains\Stores\Models\Store;
use App\Domains\Tags\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Defines the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     */
    public function share(Request $request): array
    {
        $authData = [];

        if (Auth::check()) {
            $companyUser = CompanyUser::whereUserId(Auth::user()->id)
                ->whereActive(true)
                ->first();

            $authData = [
                'user' => Auth::user(),
                'storesCount' => Store::count(),
                'itemsCount' => Item::count(),
                'tagsCount' => Tag::count(),
                'company' => $companyUser?->company,
                'role' => $companyUser?->role,
            ];
        }

        return array_merge(parent::share($request), [
            'flash' => $request->session()->get('flash'),
            ...$authData,
        ]);
    }
}
