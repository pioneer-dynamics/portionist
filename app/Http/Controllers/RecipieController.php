<?php

namespace App\Http\Controllers;

use App\Http\Requests\BookmarkRecipieRequest;
use App\Http\Requests\ListSavedRecipesRequest;
use App\Http\Resources\RecipieResourceCollection;
use App\Models\Recipie;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RecipieController extends Controller
{
    public function bookmark(BookmarkRecipieRequest $request, Recipie $recipe)
    {
        $recipe->users()->toggle($request->user()->id);
    }

    private function search(Request $request, $recipeType, $filter)
    {
        $recipes = Recipie::search($request->get('query'))
            ->where('recipeType', $recipeType);

        if ($filter === 'my') {
            $recipes = $recipes->where('users', $request->user()->id);
        }

        return $recipes;
    }

    private function getAll(Request $request, $recipeType, $filter)
    {
        $recipes = match ($filter) {
            'my' => $request->user()->recipies(),
            'all' => Recipie::query(),
        };

        $recipes = $recipes->type($recipeType);

        return $recipes;
    }

    /**
     * Display a listing of the resource.
     */
    public function index(ListSavedRecipesRequest $request, $filter, $recipeType)
    {
        $recipes = ! blank($request->get('query'))
            ? $this->search($request, $recipeType, $filter)
            : $this->getAll($request, $recipeType, $filter);

        $recipes = $recipes->latest()->paginate();

        $query = $request->get('query') ?? '';

        $recipes = new RecipieResourceCollection($recipes);

        return Inertia::render('Recipe/Index', compact('recipes', 'query'));
    }
}
