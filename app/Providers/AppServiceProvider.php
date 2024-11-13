<?php

namespace App\Providers;

use App\Models\User;
use App\Services\RecipeService;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\ServiceProvider;
use App\Contracts\RecipeService as RecipeServiceContract;
use App\Contracts\RecipeRepository as RecipeRepositoryContract;
use App\Services\RecipeRepository;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->registerRepositoryServices();
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        $this->definePulseAccessPolicy();
    }

    private function registerRepositoryServices()
    {
        $this->app->singleton(RecipeServiceContract::class, RecipeService::class);
        $this->app->singleton(RecipeRepositoryContract::class, RecipeRepository::class);
    }

    private function definePulseAccessPolicy()
    {
        Gate::define('viewPulse', function (User $user) {
            return $user->isSuperAdmin();
        });
    }
}
