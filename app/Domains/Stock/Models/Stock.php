<?php

namespace App\Domains\Stock\Models;

use App\Domains\Companies\Models\Scopes\CompanyScope;
use App\Domains\Items\Models\Item;
use App\Domains\Items\Models\ItemTag;
use App\Domains\Stock\Models\Scopes\StockFiltersScope;
use App\Domains\Stores\Models\Store;
use Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Carbon;

/**
 * @property int $id
 * @property int $company_id
 * @property int $store_id
 * @property int $item_id
 * @property int $quantity
 * @property int $low_stock
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 *
 * @method static Builder|Stock newModelQuery()
 * @method static Builder|Stock newQuery()
 * @method static Builder|Stock query()
 * @method static Builder|Stock whereCompanyId($value)
 * @method static Builder|Stock whereCreatedAt($value)
 * @method static Builder|Stock whereId($value)
 * @method static Builder|Stock whereItemId($value)
 * @method static Builder|Stock whereLowStock($value)
 * @method static Builder|Stock whereQuantity($value)
 * @method static Builder|Stock whereStoreId($value)
 * @method static Builder|Stock whereUpdatedAt($value)
 *
 * @mixin Eloquent
 */
class Stock extends Model
{
    use StockFiltersScope;

    protected $table = 'stock';

    protected $fillable = [
        'company_id',
        'store_id',
        'item_id',
        'quantity',
        'low_stock',
    ];

    protected $casts = [
        'company_id' => 'integer',
        'store_id' => 'integer',
        'item_id' => 'integer',
        'quantity' => 'integer',
        'low_stock' => 'integer',
    ];

    protected $with = ['store', 'item'];

    protected static function booted(): void
    {
        static::addGlobalScope(new CompanyScope);
    }

    public function store(): BelongsTo
    {
        return $this->belongsTo(Store::class);
    }

    public function item(): BelongsTo
    {
        return $this->belongsTo(Item::class);
    }

    public function tags(): HasMany
    {
        return $this->hasMany(ItemTag::class, 'item_id', 'item_id');
    }
}
