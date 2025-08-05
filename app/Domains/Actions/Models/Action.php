<?php

namespace App\Domains\Actions\Models;

use App\Domains\Actions\Models\Scopes\ActionFiltersScope;
use App\Domains\Companies\Models\Scopes\CompanyScope;
use App\Domains\Users\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Carbon;

/**
 * @property int $id
 * @property int $company_id
 * @property string $model
 * @property int $model_id
 * @property string $type
 * @property string $description
 * @property int $user_id
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 *
 * @method static Builder|Action newModelQuery()
 * @method static Builder|Action newQuery()
 * @method static Builder|Action query()
 * @method static Builder|Action whereCompanyId($value)
 * @method static Builder|Action whereCreatedAt($value)
 * @method static Builder|Action whereCreatedBy($value)
 * @method static Builder|Action whereDescription($value)
 * @method static Builder|Action whereId($value)
 * @method static Builder|Action whereModel($value)
 * @method static Builder|Action whereModelId($value)
 * @method static Builder|Action whereType($value)
 * @method static Builder|Action whereUpdatedAt($value)
 * @method static Builder|Action whereUserId($value)
 *
 * @mixin Builder
 */
class Action extends Model
{
    use ActionFiltersScope;

    protected $casts = [
        'company_id' => 'integer',
        'model_id' => 'integer',
        'user_id' => 'integer',
    ];

    protected $fillable = [
        'company_id',
        'model',
        'model_id',
        'type',
        'description',
        'user_id',
    ];

    protected $with = ['user'];

    protected static function booted(): void
    {
        static::addGlobalScope(new CompanyScope);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
