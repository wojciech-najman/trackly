<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Domains\Companies\Models\Company;
use App\Domains\Companies\Models\CompanyRole;
use App\Domains\Companies\Models\CompanyUser;
use App\Domains\Stores\Models\Store;
use App\Domains\Stores\Models\StoreUser;
use App\Domains\Users\Models\User;
use App\Domains\Users\Services\UsersService;
use App\Http\Requests\CreateUserData;
use App\Http\Requests\UserData;
use App\Http\Requests\UserPasswordData;
use App\Http\Requests\UserRole;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;
use Inertia\Inertia;
use Inertia\Response;

use function redirect;

class UsersController extends BaseController
{
    public function showUsers(Request $request): Response
    {
        return Inertia::render('users', [
            'items' => app(UsersService::class)->getUsers($request),
        ]);
    }

    public function createUser(CreateUserData $data): RedirectResponse
    {
        app(UsersService::class)->createUser($data);

        return redirect()->to('/users');
    }

    public function showEditUser(User $user): Response
    {
        return Inertia::render('edit-user', ['edited_user' => $user]);
    }

    public function editUser(UserData $data, User $user): RedirectResponse
    {
        app(UsersService::class)->editUser($data, $user);

        return redirect()->to('/users');
    }

    public function editPassword(UserPasswordData $data, User $user): RedirectResponse
    {
        app(UsersService::class)->editPassword($data, $user);

        return redirect()->to('/users');
    }

    public function showEditRole(User $user): Response
    {
        $companyUser = CompanyUser::whereUserId($user->id)
            ->whereCompanyId(Company::current()->id)
            ->first();

        return Inertia::render('edit-user-role', [
            'user_role' => $companyUser->role,
            'roles' => CompanyRole::all(),
            'edited_user' => $user,
        ]);
    }

    public function editRole(UserRole $userRole, User $user): RedirectResponse
    {
        app(UsersService::class)->editRole($userRole, $user);

        return redirect()->to('/users');
    }

    public function showEditUserStores(User $user): Response
    {
        return Inertia::render('edit-user-stores', [
            'stores' => Store::all(),
            'edited_user' => $user,
            'store_users' => StoreUser::whereUserId($user->id)->get(),
        ]);
    }

    public function attachToStore(User $user, Store $store): RedirectResponse
    {
        app(UsersService::class)->attachToStore($user, $store);

        return redirect()->to('/users/'.$user->id.'/stores');
    }

    public function detachFromStore(User $user, Store $store): RedirectResponse
    {
        app(UsersService::class)->detachFromStore($user, $store);

        return redirect()->to('/users/'.$user->id.'/stores');
    }

    public function deleteUser(User $user): RedirectResponse
    {
        app(UsersService::class)->deleteUser($user);

        return redirect()->to('/users');
    }
}
