<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Recipie;
use App\Http\Requests\SearchRecipeRequest;
use App\Http\Requests\StoreRecipieRequest;
use App\Http\Requests\UpdateRecipieRequest;
use App\Http\Requests\BookmarkRecipieRequest;
use App\Http\Requests\ListSavedRecipesRequest;
use App\Http\Resources\RecipieResourceCollection;

class RecipieController extends Controller
{
    public function bookmark(BookmarkRecipieRequest $request, Recipie $recipe)
    {
        $recipe->users()->toggle($request->user()->id);
    }
    
    /**
     * Display a listing of the resource.
     */
    public function index(ListSavedRecipesRequest $request, $filter, $recipeType)
    {
        $recipes = match($filter) {
            'my' => $request->user()->recipies(),
            'all' => Recipie::query(),
        };

        $recipes = $recipes->type($recipeType)->latest()->paginate();

        $recipes = new RecipieResourceCollection($recipes);

        return Inertia::render('Recipe/Index', compact('recipes'));
    }
}
