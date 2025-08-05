<?php

declare(strict_types=1);

namespace App\Domains\Companies\Enums;

enum CompanyRoles: string
{
    case ADMIN = 'ADMIN';
    case USER = 'USER';
}
