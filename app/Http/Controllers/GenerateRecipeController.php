<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Contracts\RecipeService;
use App\Http\Requests\SearchRecipeRequest;
use App\Http\Requests\GenerateRecipeRequest;
use App\Http\Resources\RecipieResourceCollection;

class GenerateRecipeController extends Controller
{
    public function form(SearchRecipeRequest $request)
    {
        return Inertia::render('Recipe/Generate');
    }

    public function search(GenerateRecipeRequest $request, RecipeService $recipeService)
    {
        $recipes = $recipeService->generate($request->ingredients, $request->recipeType);

        $recipes = new RecipieResourceCollection($recipes);

        return back()->with('flash', compact('recipes'));
    }
}
