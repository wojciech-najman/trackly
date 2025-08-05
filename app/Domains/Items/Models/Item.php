<?php

namespace App\Domains\Items\Models;

use App\Domains\Companies\Models\Scopes\CompanyScope;
use App\Domains\Items\Models\Scopes\ItemFiltersScope;
use App\Domains\Stock\Models\Stock;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Carbon;

/**
 * @property int $id
 * @property int $company_id
 * @property string $name
 * @property string $description
 * @property string $code
 * @property string $price
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property string|null $deleted_at
 *
 * @method static Builder|Item newModelQuery()
 * @method static Builder|Item newQuery()
 * @method static Builder|Item query()
 * @method static Builder|Item whereCompanyId($value)
 * @method static Builder|Item whereCode($value)
 * @method static Builder|Item whereCreatedAt($value)
 * @method static Builder|Item whereDeletedAt($value)
 * @method static Builder|Item whereDescription($value)
 * @method static Builder|Item whereId($value)
 * @method static Builder|Item whereName($value)
 * @method static Builder|Item wherePrice($value)
 * @method static Builder|Item whereUpdatedAt($value)
 *
 * @mixin Builder
 */
class Item extends Model
{
    use ItemFiltersScope;
    use SoftDeletes;

    protected $casts = [
        'company_id' => 'integer',
        'price' => 'float',
    ];

    protected $fillable = [
        'company_id',
        'name',
        'description',
        'code',
        'price',
    ];

    protected static function booted()
    {
        static::addGlobalScope(new CompanyScope);
    }

    public function notes(): HasMany
    {
        return $this->hasMany(ItemNote::class)->orderBy('id');
    }

    public function stock(): HasMany
    {
        return $this->hasMany(Stock::class)->orderBy('id');
    }

    public function tags(): HasMany
    {
        return $this->hasMany(ItemTag::class)->orderBy('id');
    }
}
