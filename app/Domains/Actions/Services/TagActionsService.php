<?php

declare(strict_types=1);

namespace App\Domains\Actions\Services;

use App\Domains\Actions\Enums\ActionTypes;
use App\Domains\Actions\Models\Action;
use App\Domains\Companies\Models\Company;
use App\Domains\Tags\Models\Tag;
use Illuminate\Support\Facades\Auth;

class TagActionsService
{
    public function tagCreated(Tag $tag): void
    {
        Action::create([
            'company_id' => Company::current()->id,
            'model' => Tag::class,
            'model_id' => $tag->id,
            'type' => ActionTypes::TAG_CREATED()->value,
            'description' => 'Tag <b>'.$tag->name.'</b> was created',
            'user_id' => Auth::user()->id,
        ]);
    }

    public function tagUpdated(Tag $tag): void
    {
        Action::create([
            'company_id' => Company::current()->id,
            'model' => Tag::class,
            'model_id' => $tag->id,
            'type' => ActionTypes::TAG_UPDATED()->value,
            'description' => 'Tag <b>'.$tag->name.'</b> was updated',
            'user_id' => Auth::user()->id,
        ]);
    }

    public function tagDeleted(Tag $tag): void
    {
        Action::create([
            'company_id' => Company::current()->id,
            'model' => Tag::class,
            'model_id' => $tag->id,
            'type' => ActionTypes::TAG_DELETED()->value,
            'description' => 'Tag <b>'.$tag->name.'</b> was deleted',
            'user_id' => Auth::user()->id,
        ]);
    }
}
