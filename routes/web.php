<?php

use App\Http\Controllers\ActivityController;
use App\Http\Controllers\CompaniesController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ItemCheckoutController;
use App\Http\Controllers\ItemsController;
use App\Http\Controllers\ItemsNotesController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SocialAuthController;
use App\Http\Controllers\StockController;
use App\Http\Controllers\StoresController;
use App\Http\Controllers\TagsController;
use App\Http\Controllers\UsersController;
use Illuminate\Support\Facades\Route;

Route::inertia('register', 'register')->name('register');

Route::inertia('/login', 'login')->name('login');

Route::get('login/{provider}', [SocialAuthController::class, 'redirect']);

Route::get('login/{provider}/callback', [SocialAuthController::class, 'callback']);

Route::middleware(['auth'])->group(function () {
    /* Auth */

    Route::inertia('/confirm-password', 'confirm-password')->name('password.confirm');

    /* Dashboard */

    Route::get('/', [DashboardController::class, 'showDashboard']);

    /* Activities */

    Route::get('/activity', [ActivityController::class, 'showActions']);

    /* Profile */

    Route::post('/profile/account', [ProfileController::class, 'updateAccount']);

    Route::post('/profile/password', [ProfileController::class, 'updatePassword']);

    /* Tags */

    Route::get('/tags', [TagsController::class, 'showTags']);

    Route::inertia('/tags/create', 'create-tag');

    Route::post('/tags', [TagsController::class, 'createTag']);

    Route::get('/tags/{tag}/edit', [TagsController::class, 'showEditTag']);

    Route::put('/tags/{tag}', [TagsController::class, 'editTag']);

    Route::delete('/tags/{tag}', [TagsController::class, 'deleteTag']);

    Route::get('/tags/attach/items/{item}', [TagsController::class, 'showAttachTag']);

    Route::post('/tags/attach/items/{item}', [TagsController::class, 'attachTag']);

    Route::delete('/tags/{tag}/detach/items/{item}', [TagsController::class, 'detachTag']);

    /* Stores */

    Route::get('/stores', [StoresController::class, 'showStores']);

    Route::inertia('/stores/create', 'create-store');

    Route::post('/stores', [StoresController::class, 'createStore']);

    Route::get('/stores/{store}/edit', [StoresController::class, 'showEditStore']);

    Route::put('/stores/{store}', [StoresController::class, 'editStore']);

    Route::delete('/stores/{store}', [StoresController::class, 'deleteStore']);

    /* Items */

    Route::get('/items', [ItemsController::class, 'showItems']);

    Route::inertia('/items/create', 'create-item');

    Route::get('items/{item}', [ItemsController::class, 'showItemDetails']);

    Route::post('/items', [ItemsController::class, 'createItem']);

    Route::get('/items/{item}/edit', [ItemsController::class, 'editItem']);

    Route::put('/items/{item}', [ItemsController::class, 'updateItem']);

    Route::delete('/items/{item}', [ItemsController::class, 'deleteItem']);

    /* Item Notes */

    Route::post('/items/{item}/note', [ItemsNotesController::class, 'store']);

    Route::put('/items/{item}/note/{itemNote}', [ItemsNotesController::class, 'update']);

    Route::delete('/items/{item}/note/{itemNote}', [ItemsNotesController::class, 'delete']);

    /* Stock */

    Route::get('/stock', [StockController::class, 'showStock']);

    Route::get('/stock/create', [StockController::class, 'showCreateStock']);

    Route::post('/stock', [StockController::class, 'createStock']);

    Route::get('/stock/{stock}/edit', [StockController::class, 'showEditStock']);

    Route::put('/stock/{stock}', [StockController::class, 'updateStock']);

    Route::get('/stock/{stock}/move', [StockController::class, 'showMoveStock']);

    Route::post('/stock/{stock}/move', [StockController::class, 'moveStock']);

    Route::delete('/stock/{stock}', [StockController::class, 'deleteStock']);

    /* Checkouts */

    Route::get('/checkouts', [ItemCheckoutController::class, 'showItemCheckouts']);

    Route::get('/checkouts/stock/{stock}/create', [ItemCheckoutController::class, 'showCreateItemCheckout']);

    Route::post('/checkouts/stock/{stock}/take', [ItemCheckoutController::class, 'createItemCheckout']);

    Route::post('/checkouts/{itemCheckout}/return', [ItemCheckoutController::class, 'returnItemCheckout']);

    Route::middleware(['can:is-admin'])->group(function () {
        /* Users */

        Route::get('/users', [UsersController::class, 'showUsers']);

        Route::inertia('/users/create', 'create-user');

        Route::post('/users', [UsersController::class, 'createUser']);

        Route::get('/users/{user}/edit', [UsersController::class, 'showEditUser']);

        Route::put('/users/{user}/account', [UsersController::class, 'editUser']);

        Route::put('/users/{user}/password', [UsersController::class, 'editPassword']);

        Route::get('/users/{user}/role/edit', [UsersController::class, 'showEditRole']);

        Route::put('/users/{user}/role/edit', [UsersController::class, 'editRole']);

        Route::get('/users/{user}/stores', [UsersController::class, 'showEditUserStores']);

        Route::post('/users/{user}/store/{store}/attach', [UsersController::class, 'attachToStore']);

        Route::delete('/users/{user}/store/{store}/detach', [UsersController::class, 'detachFromStore']);

        Route::delete('/users/{user}', [UsersController::class, 'deleteUser']);

        /* Company */

        Route::inertia('/company/edit', 'edit-company');

        Route::put('/companies', [CompaniesController::class, 'updateCompany']);

        Route::inertia('/company/users/invite', 'invite-user');

        Route::post('/companies/users/invite', [CompaniesController::class, 'inviteUser']);

        Route::delete('/companies', [CompaniesController::class, 'deleteCompany']);
    });

    /* Company */

    Route::inertia('/company/create', 'create-company');

    Route::post('/companies', [CompaniesController::class, 'createCompany']);

    Route::get('/company/switch', [CompaniesController::class, 'showCompanySwitchPage']);

    Route::post('/companies/switch', [CompaniesController::class, 'switchCompany']);
});

Route::middleware(['auth'])->group(function () {
    /* Profile */

    Route::inertia('/profile', 'profile');
});
