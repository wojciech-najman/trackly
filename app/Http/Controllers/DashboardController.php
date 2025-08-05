<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Domains\Actions\Services\ActionsService;
use Illuminate\Routing\Controller as BaseController;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends BaseController
{
    public function showDashboard(): Response
    {
        return Inertia::render('dashboard', [
            'myRecentActivity' => app(ActionsService::class)->getMyRecentActivity(),
            'recentActivity' => app(ActionsService::class)->getRecentActivity(),
        ]);
    }
}
