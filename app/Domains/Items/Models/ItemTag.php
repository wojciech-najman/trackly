<?php

namespace App\Domains\Items\Models;

use App\Domains\Companies\Models\Scopes\CompanyScope;
use App\Domains\Tags\Models\Tag;
use Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Carbon;

/**
 * @property int $id
 * @property int $company_id
 * @property int $item_id
 * @property int $tag_id
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 *
 * @method static Builder|ItemTag newModelQuery()
 * @method static Builder|ItemTag newQuery()
 * @method static Builder|ItemTag query()
 * @method static Builder|ItemTag whereCompanyId($value)
 * @method static Builder|ItemTag whereCreatedAt($value)
 * @method static Builder|ItemTag whereId($value)
 * @method static Builder|ItemTag whereItemId($value)
 * @method static Builder|ItemTag whereTagId($value)
 * @method static Builder|ItemTag whereUpdatedAt($value)
 *
 * @mixin Eloquent
 */
class ItemTag extends Model
{
    protected $casts = [
        'company_id' => 'integer',
        'item_id' => 'integer',
        'tag_id' => 'integer',
    ];

    protected $fillable = [
        'company_id',
        'tag_id',
        'item_id',
    ];

    protected $with = ['tag', 'item'];

    protected static function booted(): void
    {
        static::addGlobalScope(new CompanyScope);
    }

    public function tag(): BelongsTo
    {
        return $this->belongsTo(Tag::class);
    }

    public function item(): BelongsTo
    {
        return $this->belongsTo(Item::class);
    }
}
