<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Domains\Actions\Services\TagActionsService;
use App\Domains\Companies\Models\Company;
use App\Domains\Items\Models\Item;
use App\Domains\Items\Models\ItemTag;
use App\Domains\Tags\Models\Tag;
use App\Http\Requests\AttachTagData;
use App\Http\Requests\TagData;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;
use Inertia\Inertia;
use Inertia\Response;

use function redirect;

class TagsController extends BaseController
{
    public function index(Request $request): Response
    {
        return Inertia::render('tags', [
            'items' => Tag::orderBy('id', 'desc')
                ->filter($request)
                ->paginate(10)
                ->withQueryString(),
        ]);
    }

    public function store(TagData $tagData): RedirectResponse
    {
        $tag = Tag::create([
            'company_id' => Company::current()->id,
            ...$tagData->all(),
        ]);

        app(TagActionsService::class)->tagCreated($tag);

        return redirect()->to('/tags');
    }

    public function edit(Tag $tag): Response
    {
        return Inertia::render('edit-tag', ['tag' => $tag]);
    }

    public function update(TagData $tagData, Tag $tag): RedirectResponse
    {
        $tag->update($tagData->all());

        app(TagActionsService::class)->tagUpdated($tag);

        return redirect()->to('/tags');
    }

    public function delete(Tag $tag): RedirectResponse
    {
        $tag->delete();

        app(TagActionsService::class)->tagDeleted($tag);

        return redirect()->to('/tags');
    }

    public function attachIndex(Item $item): Response
    {
        return Inertia::render('attach-tag', [
            'item' => $item,
            'tags' => Tag::orderBy('id')->get(),
        ]);
    }

    public function attach(AttachTagData $attachTagData, Item $item): RedirectResponse
    {
        ItemTag::whereTagId($attachTagData->tag_id)->whereItemId($item->id)->firstOrCreate([
            'company_id' => Company::current()->id,
            'tag_id' => $attachTagData->tag_id,
            'item_id' => $item->id,
        ]);

        return redirect()->to('/items/'.$item->id);
    }

    public function detach(Tag $tag, Item $item): RedirectResponse
    {
        ItemTag::whereTagId($tag->id)->whereItemId($item->id)->delete();

        return redirect()->to('/items/'.$item->id);
    }
}
