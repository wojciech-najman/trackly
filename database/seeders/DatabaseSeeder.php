<?php

namespace Database\Seeders;

use App\Domains\Companies\Enums\CompanyRoles;
use App\Domains\Companies\Models\CompanyRole;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        foreach (CompanyRoles::cases() as $role) {
            CompanyRole::factory()->state(['name' => $role->value])->create();
        }
    }
}
