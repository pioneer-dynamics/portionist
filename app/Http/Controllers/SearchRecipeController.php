<?php

namespace App\Http\Controllers;

use App\Contracts\RecipeAi;
use App\Http\Requests\GenerateRecipeRequest;
use App\Http\Requests\SearchRecipeRequest;
use App\Models\Recipie;
use Inertia\Inertia;

class SearchRecipeController extends Controller
{
    public function form(SearchRecipeRequest $request)
    {
        return Inertia::render('Recipe/Generate');
    }

    public function search(GenerateRecipeRequest $request, RecipeAi $recipeAi)
    {
        $recipes = $recipeAi->withIngredients($request->ingredients)
            ->recipeType($request->recipeType)
            ->ask()->recipes();

        $models = collect();

        $recipes->each(fn ($recipe) => $models->push(Recipie::create(array_merge($recipe, ['recipeType' => $request->recipeType]))->fresh()));

        return back()->with('flash', [
            'recipes' => $models->all(),
        ]);
    }
}
