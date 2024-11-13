<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Recipie;
use App\Contracts\RecipeAi;
use App\Contracts\RecipeService;
use App\Http\Requests\SearchRecipeRequest;
use App\Http\Requests\GenerateRecipeRequest;
use App\Http\Controllers\AIP\GenerateRecipeApiController;

class GenerateRecipeController extends Controller
{
    public function form(SearchRecipeRequest $request)
    {
        return Inertia::render('Recipe/Generate');
    }

    public function search(GenerateRecipeRequest $request, RecipeService $recipeService)
    {
        $recipes = $recipeService->generate($request->ingredients, $request->recipeType);

        return back()->with('flash', compact('recipes'));
    }
}
