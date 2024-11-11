<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Recipie;
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Factories\Sequence;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

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
