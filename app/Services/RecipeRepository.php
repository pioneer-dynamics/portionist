<?php

namespace App\Services;

use App\Contracts\RecipeRepository as RecipeRepositoryContract;
use App\Models\Recipie;
use App\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Laravel\Scout\Builder as ScoutBuilder;

class RecipeRepository implements RecipeRepositoryContract
{
    public function bookmark(Recipie $recipe, User $user): Recipie
    {
        $recipe->users()->toggle($user->id);
        
        return $recipe->fresh();
    }

    public function list(User $user, string $recipeType, string $filter, ?string $query): BelongsToMany|Builder|ScoutBuilder
    {
        $recipes = ! blank($query)
            ? $this->search($user, $query, $recipeType, $filter)
            : $this->getAll($user, $recipeType, $filter);

        return $recipes->latest();
    }

    private function search($user, $query, $recipeType, $filter)
    {
        $recipes = Recipie::search($query)
            ->where('recipeType', $recipeType);

        if ($filter === 'my') {
            $recipes = $recipes->where('users', $user->id);
        }

        return $recipes;
    }

    private function getAll($user, $recipeType, $filter)
    {
        $recipes = match ($filter) {
            'my' => $user->recipies(),
            'all' => Recipie::query(),
        };

        $recipes = $recipes->type($recipeType);

        return $recipes;
    }

    public function like(Recipie $recipie, User $user): Recipie
    {
        if($recipie->isLikedBy($user))
            $recipie->likes()->user($user)->delete();
        else
            $recipie->likes()->user($user)->updateOrCreate(['user_id' => $user->id], ['liked' => true]);

        $recipie->touch();

        return $recipie->fresh();
    }

    public function dislike(Recipie $recipie, User $user): Recipie
    {
        if($recipie->isDislikedBy($user))
            $recipie->likes()->user($user)->delete();
        else
            $recipie->likes()->user($user)->updateOrCreate(['user_id' => $user->id], ['liked' => false]);

        $recipie->touch();

        return $recipie->fresh();
    }
}
