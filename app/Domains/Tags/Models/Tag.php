<?php

namespace App\Domains\Tags\Models;

use App\Domains\Companies\Models\Scopes\CompanyScope;
use App\Domains\Tags\Models\Scopes\TagFiltersScope;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Carbon;

/**
 * @property int $id
 * @property int $company_id
 * @property string $name
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property string|null $deleted_at
 *
 * @method static Builder|Tag newModelQuery()
 * @method static Builder|Tag newQuery()
 * @method static Builder|Tag query()
 * @method static Builder|Tag whereCompanyId($value)
 * @method static Builder|Tag whereCreatedAt($value)
 * @method static Builder|Tag whereDeletedAt($value)
 * @method static Builder|Tag whereId($value)
 * @method static Builder|Tag whereName($value)
 * @method static Builder|Tag whereUpdatedAt($value)
 *
 * @mixin Builder
 */
class Tag extends Model
{
    use SoftDeletes;
    use TagFiltersScope;

    protected $fillable = [
        'company_id',
        'name',
    ];

    protected $casts = [
        'company_id' => 'integer',
    ];

    protected static function booted(): void
    {
        static::addGlobalScope(new CompanyScope);
    }
}
