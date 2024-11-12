<?php

namespace App\Services\RecipeAi;

use App\Contracts\RecipeAi;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Http;

abstract class RecipeAiProvider implements RecipeAi
{
    protected $http;

    protected $recipes;

    protected $ingredients = [];

    protected $recipeType = null;

    public function __construct(protected array $config)
    {
        $this->http = Http::baseUrl($this->config['url'])->withToken($this->config['token']);

        $this->recipes = collect();
    }

    public function withIngredients(array $ingredients): RecipeAi
    {
        $this->ingredients = $ingredients;

        return $this;
    }

    public function recipeType(string $type): RecipeAi
    {
        $this->recipeType = $type;

        return $this;
    }

    public function recipes(): Collection
    {
        return $this->recipes;
    }
}
