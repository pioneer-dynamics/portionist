<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Recipie;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Factories\Sequence;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Recipie::factory(100)->create();

        User::factory(10)
            ->hasRecipies(rand(1, 5))
            ->create();
    }
}
