<?php

declare(strict_types=1);

namespace App\Domains\Tags\Services;

use App\Domains\Actions\Services\TagActionsService;
use App\Domains\Companies\Models\Company;
use App\Domains\Items\Models\Item;
use App\Domains\Items\Models\ItemTag;
use App\Domains\Tags\Models\Tag;
use App\Http\Requests\AttachTagData;
use App\Http\Requests\TagData;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;

class TagsService
{
    public function getAllTags(): Collection
    {
        return Tag::all();
    }

    public function getTags(Request $request): LengthAwarePaginator
    {
        return Tag::orderBy('id', 'desc')
            ->filter($request)
            ->paginate(10)
            ->withQueryString();
    }

    public function createTag(TagData $data): void
    {
        $tag = Tag::create([
            'company_id' => Company::current()->id,
            ...$data->all(),
        ]);

        app(TagActionsService::class)->tagCreated($tag);
    }

    public function editTag(TagData $data, Tag $tag): void
    {
        $tag->update($data->all());

        app(TagActionsService::class)->tagUpdated($tag);
    }

    public function deleteTag(Tag $tag): void
    {
        $tag->delete();

        app(TagActionsService::class)->tagDeleted($tag);
    }

    public function attachTag(AttachTagData $data, Item $item): void
    {
        ItemTag::whereTagId($data->tag_id)->whereItemId($item->id)->firstOrCreate([
            'company_id' => Company::current()->id,
            'tag_id' => $data->tag_id,
            'item_id' => $item->id,
        ]);
    }

    public function detachTag(Tag $tag, Item $item): void
    {
        ItemTag::whereTagId($tag->id)->whereItemId($item->id)->delete();
    }
}
