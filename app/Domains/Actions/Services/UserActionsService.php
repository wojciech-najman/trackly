<?php

declare(strict_types=1);

namespace App\Domains\Actions\Services;

use App\Domains\Actions\Enums\ActionTypes;
use App\Domains\Actions\Models\Action;
use App\Domains\Companies\Models\Company;
use App\Domains\Users\Models\User;
use Illuminate\Support\Facades\Auth;

class UserActionsService
{
    public function userCreated(User $user): void
    {
        Action::create([
            'company_id' => Company::current()->id,
            'model' => User::class,
            'model_id' => $user->id,
            'type' => ActionTypes::USER_CREATED()->value,
            'description' => 'User <b>'.$user->name.'</b> was created',
            'user_id' => Auth::user()->id,
        ]);
    }

    public function userRegistered(User $user): void
    {
        Action::create([
            'company_id' => Company::current()->id,
            'model' => User::class,
            'model_id' => $user->id,
            'type' => ActionTypes::USER_REGISTERED()->value,
            'description' => 'User <b>'.$user->name.'</b> registered',
            'user_id' => Auth::user()->id,
        ]);
    }

    public function userUpdatedHisAccount(User $user): void
    {
        Action::create([
            'company_id' => Company::current()->id,
            'model' => User::class,
            'model_id' => $user->id,
            'type' => ActionTypes::USER_UPDATED_HIS_ACCOUNT()->value,
            'description' => 'User <b>'.$user->name.'</b> updated his account',
            'user_id' => Auth::user()->id,
        ]);
    }

    public function userChangedHisPassword(User $user): void
    {
        Action::create([
            'company_id' => Company::current()->id,
            'model' => User::class,
            'model_id' => $user->id,
            'type' => ActionTypes::USER_UPDATED_HIS_PASSWORD()->value,
            'description' => 'User <b>'.$user->name.'</b> changed his password',
            'user_id' => Auth::user()->id,
        ]);
    }

    public function userAccountUpdated(User $user)
    {
        Action::create([
            'company_id' => Company::current()->id,
            'model' => User::class,
            'model_id' => $user->id,
            'type' => ActionTypes::USER_ACCOUNT_UPDATED()->value,
            'description' => 'User <b>'.$user->name.'</b> account was updated',
            'user_id' => Auth::user()->id,
        ]);
    }

    public function userPasswordUpdated(User $user)
    {
        Action::create([
            'company_id' => Company::current()->id,
            'model' => User::class,
            'model_id' => $user->id,
            'type' => ActionTypes::USER_PASSWORD_CHANGED()->value,
            'description' => 'User <b>'.$user->name.'</b> password was changed',
            'user_id' => Auth::user()->id,
        ]);
    }

    public function userDeleted(User $user)
    {
        Action::create([
            'company_id' => Company::current()->id,
            'model' => User::class,
            'model_id' => $user->id,
            'type' => ActionTypes::USER_DELETED()->value,
            'description' => 'User <b>'.$user->name.'</b> was deleted',
            'user_id' => Auth::user()->id,
        ]);
    }
}
