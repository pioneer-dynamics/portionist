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
    public function my(ListSavedRecipesRequest $request, $recipeType)
    {
        $recipes = new RecipieResourceCollection($request->user()->recipies()->type($recipeType)->latest()->paginate());

        return Inertia::render('Recipe/Index', compact('recipes'));
    }
    
    /**
     * Display a listing of the resource.
     */
    public function index(ListSavedRecipesRequest $request, $filter, $recipeType)
    {
        $recipes = match($filter) {
            'my' => $request->user()->recipies()->type($recipeType)->latest()->paginate(),
            'all' => Recipie::type($recipeType)->latest()->paginate(),   
        };

        $recipes = new RecipieResourceCollection($recipes);

        return Inertia::render('Recipe/Index', compact('recipes'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRecipieRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Recipie $recipie)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Recipie $recipie)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRecipieRequest $request, Recipie $recipie)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Recipie $recipie)
    {
        //
    }
}
