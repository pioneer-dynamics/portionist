<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Recipie>
 */
class RecipieFactory extends Factory
{

    private $ingredients = [
        'gin', 'vodka', 'whiskey', 'rum', 'tequila', 'cognac', 'brandy', 'beer', 'red wine'
    ];

    private $adjectives = [
        'amazing', 'dashing', 'fancy', 'funny', 'gorgeous', 'knockout', 'mystical', 'sophisticated', 'superb', 'wonderful'
    ];

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $ingredients = $this->faker->randomElements($this->ingredients, rand(3,7));

        $title = Str::title(fake()->randomElement($this->adjectives) . ' ' . fake()->randomElement($ingredients));

        return [
            'title' => $title,
            'ingredients' => $ingredients,
            'directions' => $this->faker->sentences(rand(3,7)),
        ];
    }
}
