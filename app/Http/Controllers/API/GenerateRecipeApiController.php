<?php
namespace App\Http\Controllers\API;

use App\Models\Recipie;
use App\Contracts\RecipeAi;
use App\Contracts\RecipeService;
use App\Http\Controllers\Controller;
use App\Http\Requests\GenerateRecipeRequest;

class GenerateRecipeApiController extends Controller
{
    public function search(GenerateRecipeRequest $request, RecipeService $recipeService)
    {
        return $recipeService->generate($request->ingredients, $request->recipeType);
    }
}