<?php

namespace Database\Seeders;

use App\Models\Recipie;
use Illuminate\Database\Seeder;

class RecipieSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Recipie::factory(100)
            ->create();
    }
}
