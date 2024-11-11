<?php

namespace App\Providers;

use App\Contracts\RecipeAi;
use App\Services\RecipeAi\OpenAi;
use Illuminate\Support\ServiceProvider;

class AiServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->singleton(RecipeAi::class, function ($app) {
            
            $connection = $this->getDefaultConnection();

            $connection_class = $connection['class'];
            
            return new $connection_class($connection['config']);
        });
    }

    private function getDefaultConnection(): array
    {
        $connection = config('recipie-ai.default');

        return config('recipie-ai.connections')[$connection];
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
