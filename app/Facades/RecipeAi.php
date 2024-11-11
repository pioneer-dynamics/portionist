<?php
namespace App\Facades;

use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Facade;
use App\Contracts\RecipeAi as ContractsRecipeAi;

/**
 * @method static RecipeAi withIngredients(array $ingredients);
 * @method static RecipeAi recipeType(string $type);
 * @method static RecipeAi ask(?int $count = null);
 * @method static Collection recipes();
 */
class RecipeAi extends Facade
{
    protected static function getFacadeAccessor()
    {
        return ContractsRecipeAi::class;
    }
}