<?php

namespace App\Http\Controllers\API;

use App\Contracts\RecipeService;
use App\Http\Controllers\Controller;
use App\Http\Requests\GenerateRecipeRequest;
use App\Http\Resources\RecipieResourceCollection;

class GenerateRecipeApiController extends Controller
{
    public function generate(GenerateRecipeRequest $request, RecipeService $recipeService)
    {
        $recipes = $recipeService->generate($request->ingredients, $request->recipeType);

        return new RecipieResourceCollection($recipes);
    }
}
