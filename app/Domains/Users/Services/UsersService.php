<?php

declare(strict_types=1);

namespace App\Domains\Users\Services;

use App\Domains\Actions\Services\UserActionsService;
use App\Domains\Companies\Enums\CompanyRoles;
use App\Domains\Companies\Models\Company;
use App\Domains\Companies\Models\CompanyRole;
use App\Domains\Companies\Models\CompanyUser;
use App\Domains\Companies\Services\CreateCompanyDuringRegistrationService;
use App\Domains\Stores\Models\Store;
use App\Domains\Stores\Models\StoreUser;
use App\Domains\Users\Models\User;
use App\Http\Requests\CreateUserData;
use App\Http\Requests\UserData;
use App\Http\Requests\UserPasswordData;
use App\Http\Requests\UserRole;
use Auth;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UsersService
{
    public function loginUserBySocialAuth(\Laravel\Socialite\Contracts\User $userSocial): User
    {
        $user = User::whereEmail($userSocial->getEmail())->first();

        if (! $user) {
            $user = User::create([
                'name' => $userSocial->getName(),
                'email' => $userSocial->getEmail(),
                'password' => Hash::make(uniqid()),
            ]);

            app(CreateCompanyDuringRegistrationService::class)->create($user);

            app(UserActionsService::class)->userRegistered($user);
        }

        Auth::login($user);

        return $user;
    }

    public function getUsers(Request $request): LengthAwarePaginator
    {
        return CompanyUser::whereCompanyId(Company::current()->id)
            ->orderBy('id', 'desc')
            ->filter($request)
            ->paginate(10)
            ->withQueryString();
    }

    public function createUser(CreateUserData $data): void
    {
        $user = User::create([
            'name' => $data->name,
            'email' => $data->email,
            'password' => Hash::make($data->password),
        ]);

        $role = CompanyRole::firstOrCreate(['name' => CompanyRoles::USER->value]);

        CompanyUser::create([
            'company_id' => Company::current()->id,
            'company_role_id' => $role->id,
            'user_id' => $user->id,
            'active' => true,
        ]);

        app(UserActionsService::class)->userCreated($user);
    }

    public function editUser(UserData $data, User $user): void
    {
        $user->update($data->all());

        app(UserActionsService::class)->userAccountUpdated($user);
    }

    public function editPassword(UserPasswordData $data, User $user): void
    {
        $user->update(['password' => Hash::make($data->password)]);

        app(UserActionsService::class)->userPasswordUpdated($user);
    }

    public function editRole(UserRole $userRole, User $user): void
    {
        CompanyUser::whereUserId($user->id)
            ->whereCompanyId(Company::current()->id)
            ->first()
            ->update(['company_role_id' => $userRole->role]);
    }

    public function attachToStore(User $user, Store $store): void
    {
        StoreUser::whereUserId($user->id)
            ->whereStoreId($store->id)
            ->firstOrCreate([
                'company_id' => Company::current()->id,
                'user_id' => $user->id,
                'store_id' => $store->id,
            ]);
    }

    public function detachFromStore(User $user, Store $store): void
    {
        StoreUser::whereUserId($user->id)
            ->whereStoreId($store->id)
            ->first()
            ?->delete();
    }

    public function deleteUser(User $user): void
    {
        CompanyUser::whereUserId($user->id)
            ->get()
            ->each(fn ($companyUser) => $companyUser->delete());

        $user->delete();

        app(UserActionsService::class)->userDeleted($user);
    }
}
