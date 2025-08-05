<?php

namespace App\Domains\Companies\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Carbon;
use Spatie\Multitenancy\Models\Tenant;

/**
 * @property int $id
 * @property string $name
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 *
 * @method static Builder|CompanyRole newModelQuery()
 * @method static Builder|CompanyRole newQuery()
 * @method static Builder|CompanyRole query()
 * @method static Builder|CompanyRole whereCreatedAt($value)
 * @method static Builder|CompanyRole whereId($value)
 * @method static Builder|CompanyRole whereName($value)
 * @method static Builder|CompanyRole whereUpdatedAt($value)
 *
 * @mixin Builder
 */
class CompanyRole extends Tenant
{
    use HasFactory;

    protected $fillable = [
        'name',
    ];
}
