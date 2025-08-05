<?php

namespace App\Domains\Items\Models;

use App\Domains\Companies\Models\Scopes\CompanyScope;
use App\Domains\Users\Models\User;
use Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Carbon;

/**
 * @property int $id
 * @property int $company_id
 * @property int $item_id
 * @property int $user_id
 * @property string $note
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property string|null $deleted_at
 *
 * @method static Builder|ItemNote newModelQuery()
 * @method static Builder|ItemNote newQuery()
 * @method static Builder|ItemNote query()
 * @method static Builder|ItemNote whereCompanyId($value)
 * @method static Builder|ItemNote whereCreatedAt($value)
 * @method static Builder|ItemNote whereDeletedAt($value)
 * @method static Builder|ItemNote whereId($value)
 * @method static Builder|ItemNote whereItemId($value)
 * @method static Builder|ItemNote whereNote($value)
 * @method static Builder|ItemNote whereUpdatedAt($value)
 * @method static Builder|ItemNote whereUserId($value)
 *
 * @mixin Eloquent
 */
class ItemNote extends Model
{
    use SoftDeletes;

    protected $casts = [
        'company_id' => 'integer',
        'item_id' => 'integer',
        'user_id' => 'integer',
    ];

    protected $fillable = [
        'company_id',
        'item_id',
        'user_id',
        'note',
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
