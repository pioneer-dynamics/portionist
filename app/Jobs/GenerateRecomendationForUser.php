<?php

namespace App\Jobs;

use App\Contracts\RecipeAi;
use App\Contracts\RecipeService;
use App\Models\Like;
use App\Models\User;
use App\Models\Recipie;
use App\Notifications\NewRecipeRecommendation;
use Illuminate\Bus\Batchable;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;

class GenerateRecomendationForUser implements ShouldQueue
{
    use Queueable;
    use Batchable;

    /**
     * Create a new job instance.
     */
    public function __construct(public User $user, public string $recipeType)
    {
        //
    }

    /**
     * Execute the job.
     */
    public function handle(RecipeService $recipeService): void
    {
        if($this->batch()->canceled())
            return;

        $recommendations = $this->generateRecommendations($recipeService);

        logger(__CLASS__, ['recipeType' => $this->recipeType, 'recommendations' => $recommendations->all()]);

        if( $recommendations->isNotEmpty() )
            $this->user->notify(new NewRecipeRecommendation($this->user, $this->recipeType, $recommendations->all()));
    }

    private function generateRecommendations(RecipeService $recipeService)
    {
        $seedRecipes = $this->getBookmarkedAndLikedRecipies(config('recipie-ai.recommendations.based_on_count'));

        $recommendations = collect();

        $seedRecipes->each(function($recipe) use(&$recommendations, $recipeService) {
            logger('each', ['recipe' => $recipe->title]);
            $recommendations->push($recipeService->generate($this->getIngredients($recipe), $recipe->recipeType, config('recipie-ai.recommendations.count'))[0]);
        });

        logger(__FUNCTION__, [
            'seed' => $seedRecipes->all(),
            'recommendations' => $recommendations->all()
        ]);

        return $recommendations;
    }

    private function getIngredients($recipe)
    {
        $ingredient_names = collect();

        foreach($recipe->ingredients as $ingredient)
        {
            $ingredient_names->push($ingredient['name']);
        }

        return $ingredient_names->all();
    }

    private function getBookmarkedAndLikedRecipies(int $count)
    {
        $latestSaved = $this->getSavedRecipesNotDislikedByUser($count);

        $latestLiked = $this->getUnsavedRecipiesLikedByUser($count);

        return $latestLiked->merge($latestSaved);
    }

    private function getUnsavedRecipiesLikedByUser(int $count)
    {
        $recipes = $this->user->likes()->liked()->get()
                    ->filter(fn(Like $like) => ! $like->recipie->isBookmarkedBy($this->user) && $like->recipie->recipeType == $this->recipeType)
                    ->random(fn($items) => min($count, count($items)))
                    ->map(fn($like) => $like->recipie);

        return $recipes;
    }

    private function getSavedRecipesNotDislikedByUser(int $count)
    {
        $recipes = $this->user->recipies()->type($this->recipeType)->get()
                    ->filter(fn(Recipie $recipe) => ! $recipe->isDislikedBy($this->user))
                    ->random(fn($items) => min($count, count($items)));

        return $recipes;
    }
}
