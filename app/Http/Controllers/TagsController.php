<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Domains\Items\Models\Item;
use App\Domains\Tags\Models\Tag;
use App\Domains\Tags\Services\TagsService;
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
    public function showTags(Request $request): Response
    {
        return Inertia::render('tags', [
            'items' => app(TagsService::class)->getTags($request),
        ]);
    }

    public function createTag(TagData $data): RedirectResponse
    {
        app(TagsService::class)->createTag($data);

        return redirect()->to('/tags');
    }

    public function showEditTag(Tag $tag): Response
    {
        return Inertia::render('edit-tag', ['tag' => $tag]);
    }

    public function editTag(TagData $data, Tag $tag): RedirectResponse
    {
        app(TagsService::class)->editTag($data, $tag);

        return redirect()->to('/tags');
    }

    public function deleteTag(Tag $tag): RedirectResponse
    {
        app(TagsService::class)->deleteTag($tag);

        return redirect()->to('/tags');
    }

    public function showAttachTag(Item $item): Response
    {
        return Inertia::render('attach-tag', [
            'item' => $item,
            'tags' => Tag::orderBy('id')->get(),
        ]);
    }

    public function attachTag(AttachTagData $data, Item $item): RedirectResponse
    {
        app(TagsService::class)->attachTag($data, $item);

        return redirect()->to('/items/'.$item->id);
    }

    public function detachTag(Tag $tag, Item $item): RedirectResponse
    {
        app(TagsService::class)->detachTag($tag, $item);

        return redirect()->to('/items/'.$item->id);
    }
}
