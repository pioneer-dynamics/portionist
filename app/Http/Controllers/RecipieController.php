<?php

namespace App\Http\Controllers;

use App\Contracts\RecipeRepository;
use App\Http\Requests\BookmarkRecipieRequest;
use App\Http\Requests\LikeRecipeRequest;
use App\Http\Requests\ListSavedRecipesRequest;
use App\Http\Resources\RecipieResource;
use App\Http\Resources\RecipieResourceCollection;
use App\Models\Recipie;
use Inertia\Inertia;

class RecipieController extends Controller
{
    public function __construct(private RecipeRepository $recipeRepository) {}

    public function bookmark(BookmarkRecipieRequest $request, Recipie $recipe)
    {
        $recipe = $this->recipeRepository->bookmark($recipe, $request->user());

        $recipe = new RecipieResource($recipe);

        if ($request->get('from') === 'email') {
            return redirect()->route('recipes.index', ['filter' => 'my', 'recipeType' => $recipe->recipeType])->banner($recipe->title.' has been bookmarked');
        } else {
            return back()->with('flash', compact('recipe'));
        }
    }

    /**
     * Display a listing of the resource.
     */
    public function index(ListSavedRecipesRequest $request, $filter, $recipeType)
    {
        $recipes = $this->recipeRepository->list($request->user(), $recipeType, $filter, $request->get('query'));

        $query = $request->get('query');

        $recipes = new RecipieResourceCollection($recipes->paginate());

        return Inertia::render('Recipe/Index', compact('recipes', 'query'));
    }

    public function like(LikeRecipeRequest $request, Recipie $recipe)
    {
        $recipe = $this->recipeRepository->like($recipe, $request->user());

        $recipe = new RecipieResource($recipe);

        logger(__CLASS__.'::'.__FUNCTION__.':'.__LINE__.' liked ', [
            'recipe' => $recipe
        ] );

        return back()->with('flash', [
            'recipe' => $recipe,
        ]);
    }

    public function dislike(LikeRecipeRequest $request, Recipie $recipe)
    {
        $recipe = $this->recipeRepository->dislike($recipe, $request->user());

        $recipe = new RecipieResource($recipe);

        return back()->with('flash', compact('recipe'));
    }
}
