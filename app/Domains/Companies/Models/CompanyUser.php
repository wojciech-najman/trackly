<?php

namespace App\Domains\Companies\Models;

use App\Domains\Companies\Models\Scopes\CompanyUserFiltersScope;
use App\Domains\Users\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Carbon;
use Spatie\Multitenancy\Models\Tenant;

/**
 * @property int $id
 * @property int $company_id
 * @property int $user_id
 * @property bool $active
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 *
 * @method static Builder|CompanyUser newModelQuery()
 * @method static Builder|CompanyUser newQuery()
 * @method static Builder|CompanyUser query()
 * @method static Builder|CompanyUser whereCreatedAt($value)
 * @method static Builder|CompanyUser whereId($value)
 * @method static Builder|CompanyUser whereCompanyId($value)
 * @method static Builder|CompanyUser whereUserId($value)
 * @method static Builder|CompanyUser whereCompanyRoleId($value)
 * @method static Builder|CompanyUser whereActive($value)
 * @method static Builder|CompanyUser whereUpdatedAt($value)
 *
 * @mixin Builder
 */
class CompanyUser extends Tenant
{
    use CompanyUserFiltersScope;

    protected $table = 'company_users';

    protected $casts = [
        'company_id' => 'integer',
        'user_id' => 'integer',
        'company_role_id' => 'integer',
        'active' => 'boolean',
    ];

    protected $fillable = [
        'company_id',
        'user_id',
        'company_role_id',
        'active',
    ];

    protected $with = ['company', 'user', 'role'];

    public function company(): BelongsTo
    {
        return $this->belongsTo(Company::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function role(): BelongsTo
    {
        return $this->belongsTo(CompanyRole::class, 'company_role_id');
    }
}
