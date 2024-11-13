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
    public function bookmark(Recipie $recipe, User $user): array
    {
        return $recipe->users()->toggle($user->id);
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
}
