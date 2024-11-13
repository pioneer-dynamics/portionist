<?php

namespace App\Http\Controllers\API;

use App\Models\Recipie;
use Illuminate\Http\Request;
use App\Contracts\RecipeRepository;
use App\Http\Controllers\Controller;
use App\Http\Requests\BookmarkRecipieRequest;
use App\Http\Requests\ListSavedRecipesRequest;
use App\Http\Resources\RecipieResourceCollection;

class RecipeApiController extends Controller
{
    public function __construct(private RecipeRepository $recipeRepository)
    {
        
    }

    public function bookmark(BookmarkRecipieRequest $request, Recipie $recipe)
    {
        $this->recipeRepository->bookmark($recipe, $request->user());
    }

    public function index(ListSavedRecipesRequest $request, $filter, $recipeType)
    {
        $recipes = $this->recipeRepository->list($request->user(), $recipeType, $filter, $request->get('query'));

        $recipes = new RecipieResourceCollection($recipes->paginate());

        return $recipes;
    }
}
