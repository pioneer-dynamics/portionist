<?php
namespace App\Contracts;

use Illuminate\Support\Collection;

interface RecipeAi
{
    /**
     * Set the ingredients for this request
     * 
     * @param array<string> $ingredients
     * @return self
     */
    public function withIngredients(array $ingredients): self;

    /**
     * Set the recipe type
     * 
     * @param string $type
     * @return self
     */
    public function recipeType(string $type): self;

    /**
     * Send the request to the AI
     * 
     * @param int|null $count
     * @return self
     */
    public function ask(?int $count = null): self;

    /**
     * Get the recipes
     * 
     * @return Collection
     */
    public function recipes(): Collection;
}