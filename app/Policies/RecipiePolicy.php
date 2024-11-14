<?php

namespace App\Policies;

use App\Models\Recipie;
use App\Models\User;

class RecipiePolicy
{
    public function search(User $user): bool
    {
        return true;
    }

    public function bookmark(User $user, Recipie $recipie): bool
    {
        return true;
    }
    
    public function like(User $user, Recipie $recipie): bool
    {
        return true;
    }
    
    public function dislike(User $user, Recipie $recipie): bool
    {
        return true;
    }

    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return true;
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, Recipie $recipie): bool
    {
        return true;
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return true;
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Recipie $recipie): bool
    {
        if ($user->is_super_admin) {
            return true;
        }

        return false;
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Recipie $recipie): bool
    {
        if ($user->is_super_admin) {
            return true;
        }

        return false;
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, Recipie $recipie): bool
    {
        if ($user->is_super_admin) {
            return true;
        }

        return false;
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, Recipie $recipie): bool
    {
        if ($user->is_super_admin) {
            return true;
        }

        return false;
    }
}
