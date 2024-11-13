<?php
namespace App\Contracts;

interface RecipeService
{
    /**
     * Generate a recipe
     */
    public function generate(array $ingredients, string $recipeType): array;
}