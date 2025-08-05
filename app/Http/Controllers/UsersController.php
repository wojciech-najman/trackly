<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Domains\Actions\Services\UserActionsService;
use App\Domains\Companies\Enums\CompanyRoles;
use App\Domains\Companies\Models\Company;
use App\Domains\Companies\Models\CompanyRole;
use App\Domains\Companies\Models\CompanyUser;
use App\Domains\Stores\Models\Store;
use App\Domains\Stores\Models\StoreUser;
use App\Domains\Users\Models\User;
use App\Http\Requests\CreateUserData;
use App\Http\Requests\UserData;
use App\Http\Requests\UserPasswordData;
use App\Http\Requests\UserRole;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Inertia\Response;

use function redirect;

class UsersController extends BaseController
{
    public function index(Request $request): Response
    {
        return Inertia::render('users', [
            'items' => CompanyUser::whereCompanyId(Company::current()->id)
                ->orderBy('id', 'desc')
                ->filter($request)
                ->paginate(10)
                ->withQueryString(),
        ]);
    }

    public function store(CreateUserData $createUserData): RedirectResponse
    {
        $user = User::create([
            'name' => $createUserData->name,
            'email' => $createUserData->email,
            'password' => Hash::make($createUserData->password),
        ]);

        $role = CompanyRole::firstOrCreate(['name' => CompanyRoles::USER->value]);

        CompanyUser::create([
            'company_id' => Company::current()->id,
            'company_role_id' => $role->id,
            'user_id' => $user->id,
            'active' => true,
        ]);

        app(UserActionsService::class)->userCreated($user);

        return redirect()->to('/users');
    }

    public function edit(User $user): Response
    {
        return Inertia::render('edit-user', ['edited_user' => $user]);
    }

    public function updateAccount(UserData $userData, User $user): RedirectResponse
    {
        $user->update($userData->all());

        app(UserActionsService::class)->userAccountUpdated($user);

        return redirect()->to('/users');
    }

    public function updatePassword(UserPasswordData $userPasswordData, User $user): RedirectResponse
    {
        $user->update(['password' => Hash::make($userPasswordData->password)]);

        app(UserActionsService::class)->userPasswordUpdated($user);

        return redirect()->to('/users');
    }

    public function editRole(User $user): Response
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

    public function updateRole(UserRole $userRole, User $user): RedirectResponse
    {
        CompanyUser::whereUserId($user->id)
            ->whereCompanyId(Company::current()->id)
            ->first()
            ->update(['company_role_id' => $userRole->role]);

        return redirect()->to('/users');
    }

    public function editUserStores(User $user): Response
    {
        return Inertia::render('edit-user-stores', [
            'stores' => Store::all(),
            'edited_user' => $user,
            'store_users' => StoreUser::whereUserId($user->id)->get(),
        ]);
    }

    public function attachToStore(User $user, Store $store): RedirectResponse
    {
        StoreUser::whereUserId($user->id)
            ->whereStoreId($store->id)
            ->firstOrCreate([
                'company_id' => Company::current()->id,
                'user_id' => $user->id,
                'store_id' => $store->id,
            ]);

        return redirect()->to('/users/'.$user->id.'/stores');
    }

    public function detachFromStore(User $user, Store $store): RedirectResponse
    {
        StoreUser::whereUserId($user->id)
            ->whereStoreId($store->id)
            ->first()
            ?->delete();

        return redirect()->to('/users/'.$user->id.'/stores');
    }

    public function delete(User $user): RedirectResponse
    {
        CompanyUser::whereUserId($user->id)
            ->get()
            ->each(fn ($companyUser) => $companyUser->delete());

        $user->delete();

        app(UserActionsService::class)->userDeleted($user);

        return redirect()->to('/users');
    }
}
