<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Domains\Actions\Services\ActionsService;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;
use Inertia\Inertia;
use Inertia\Response;

class ActivityController extends BaseController
{
    public function showActions(Request $request): Response
    {
        return Inertia::render('activity', [
            'items' => app(ActionsService::class)->getActions($request),
        ]);
    }
}
