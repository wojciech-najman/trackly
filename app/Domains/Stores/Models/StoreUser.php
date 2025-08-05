<?php

namespace App\Domains\Stores\Models;

use App\Domains\Companies\Models\Scopes\CompanyScope;
use App\Domains\Users\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Carbon;

/**
 * @property int $id
 * @property int $user_id
 * @property int $store_id
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 *
 * @method static Builder|Store newModelQuery()
 * @method static Builder|Store newQuery()
 * @method static Builder|Store query()
 * @method static Builder|Store whereStoreId($value)
 * @method static Builder|Store whereCreatedAt($value)
 * @method static Builder|Store whereUserId($value)
 * @method static Builder|Store whereId($value)
 * @method static Builder|Store whereUpdatedAt($value)
 *
 * @mixin Builder
 */
class StoreUser extends Model
{
    protected $fillable = [
        'company_id',
        'user_id',
        'store_id',
    ];

    protected $casts = [
        'company_id' => 'integer',
        'user_id' => 'integer',
        'store_id' => 'integer',
    ];

    protected $with = ['store', 'user'];

    protected static function booted(): void
    {
        static::addGlobalScope(new CompanyScope);
    }

    public function store(): BelongsTo
    {
        return $this->belongsTo(Store::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
