<?php

namespace App\Services;

use App\Contracts\RecipeAi;
use App\Contracts\RecipeService as RecipeServieContract;
use App\Models\Recipie;

class RecipeService implements RecipeServieContract
{
    public function __construct(private RecipeAi $recipeAi) {}

    public function generate(array $ingredients, string $recipeType): array
    {
        $recipes = $this->recipeAi->withIngredients($ingredients)->recipeType($recipeType)->ask()->recipes();

        $models = collect();

        $recipes->each(fn ($recipe) => $models->push(Recipie::create(array_merge($recipe, ['recipeType' => $recipeType]))->fresh()));

        return $models->all();
    }
}
