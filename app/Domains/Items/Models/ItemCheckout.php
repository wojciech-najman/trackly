<?php

namespace App\Domains\Items\Models;

use App\Domains\Companies\Models\Scopes\CompanyScope;
use App\Domains\Items\Models\Scopes\ItemCheckoutFiltersScope;
use App\Domains\Stores\Models\Store;
use App\Domains\Users\Models\User;
use Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property int $id
 * @property int $company_id
 * @property int $store_id
 * @property int $item_id
 * @property int $user_id
 * @property int $quantity
 * @property string $date_from
 * @property string|null $date_to
 *
 * @method static Builder|ItemCheckout newModelQuery()
 * @method static Builder|ItemCheckout newQuery()
 * @method static Builder|ItemCheckout query()
 * @method static Builder|ItemCheckout whereCompanyId($value)
 * @method static Builder|ItemCheckout whereDateFrom($value)
 * @method static Builder|ItemCheckout whereDateTo($value)
 * @method static Builder|ItemCheckout whereId($value)
 * @method static Builder|ItemCheckout whereItemId($value)
 * @method static Builder|ItemCheckout whereQuantity($value)
 * @method static Builder|ItemCheckout whereStoreId($value)
 * @method static Builder|ItemCheckout whereUserId($value)
 *
 * @mixin Eloquent
 */
class ItemCheckout extends Model
{
    use ItemCheckoutFiltersScope;

    protected $casts = [
        'company_id' => 'integer',
        'store_id' => 'integer',
        'item_id' => 'integer',
        'user_id' => 'integer',
        'quantity' => 'integer',
    ];

    protected $fillable = [
        'company_id',
        'store_id',
        'item_id',
        'user_id',
        'quantity',
        'date_from',
        'date_to',
    ];

    protected $dates = [
        'date_from',
        'date_to',
    ];

    public $timestamps = false;

    protected $with = ['store', 'item', 'user'];

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

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
