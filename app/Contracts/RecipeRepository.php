<?php
namespace App\Contracts;

use App\Models\User;
use App\Models\Recipie;
use Illuminate\Database\Eloquent\Builder;
use Laravel\Scout\Builder as ScoutBuilder;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

interface RecipeRepository
{
    /**
     * Bookmark a recipe
     */
    public function bookmark(Recipie $recipie, User $user): array;

    /**
     * List a recipie with filters or not
     */
    public function list(User $user, string $recipeType, string $filter, ?string $query): BelongsToMany|Builder|ScoutBuilder;
}