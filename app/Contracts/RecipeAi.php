<?php

namespace App\Contracts;

use Illuminate\Support\Collection;

interface RecipeAi
{
    /**
     * Set the ingredients for this request
     *
     * @param  array<string>  $ingredients
     */
    public function withIngredients(array $ingredients): self;

    /**
     * Set the recipe type
     */
    public function recipeType(string $type): self;

    /**
     * Send the request to the AI
     */
    public function ask(?int $count = null): self;

    /**
     * Get the recipes
     */
    public function recipes(): Collection;
}
