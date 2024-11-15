<?php

namespace App\Services;

use App\Contracts\RecipeAi;
use App\Contracts\RecipeService as RecipeServieContract;
use App\Models\Recipie;

class RecipeService implements RecipeServieContract
{
    public function __construct(private RecipeAi $recipeAi) {}

    public function generate(array $ingredients, string $recipeType, ?int $count = null): array
    {
        logger(__CLASS__, ['ingredients' => $ingredients, 'recipeType' => $recipeType, 'count' => $count]);

        $count = $count ?? config('recipie-ai.count');

        $recipes = $this->recipeAi->withIngredients($ingredients)->recipeType($recipeType)->ask($count)->recipes();

        $models = collect();

        $recipes->each(fn ($recipe) => $models->push(Recipie::create(array_merge($recipe, ['recipeType' => $recipeType]))->fresh()));

        return $models->all();
    }
}
