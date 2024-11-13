<?php

namespace App\Providers;

use App\Contracts\RecipeRepository as RecipeRepositoryContract;
use App\Contracts\RecipeService as RecipeServiceContract;
use App\Models\User;
use App\Services\RecipeRepository;
use App\Services\RecipeService;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\ServiceProvider;

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
