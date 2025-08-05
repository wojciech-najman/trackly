<?php

namespace App\Domains\Stores\Models;

use App\Domains\Companies\Models\Scopes\CompanyScope;
use App\Domains\Stores\Models\Scopes\StoreFiltersScope;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Carbon;

/**
 * @property int $id
 * @property int $company_id
 * @property string $name
 * @property string $description
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property string|null $deleted_at
 *
 * @method static Builder|Store newModelQuery()
 * @method static Builder|Store newQuery()
 * @method static Builder|Store query()
 * @method static Builder|Store whereCompanyId($value)
 * @method static Builder|Store whereCreatedAt($value)
 * @method static Builder|Store whereDeletedAt($value)
 * @method static Builder|Store whereDescription($value)
 * @method static Builder|Store whereId($value)
 * @method static Builder|Store whereName($value)
 * @method static Builder|Store whereUpdatedAt($value)
 *
 * @mixin Builder
 */
class Store extends Model
{
    use SoftDeletes;
    use StoreFiltersScope;

    protected $fillable = [
        'company_id',
        'name',
        'description',
    ];

    protected $casts = [
        'company_id' => 'integer',
    ];

    protected static function booted(): void
    {
        static::addGlobalScope(new CompanyScope);
    }
}
