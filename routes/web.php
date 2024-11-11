<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\RecipieController;
use App\Http\Controllers\HomePageController;
use App\Http\Controllers\SearchRecipeController;

Route::get('/', HomePageController::class)->name('home');

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('generate', [SearchRecipeController::class, 'form'])->name('generate.form');
    Route::post('generate', [SearchRecipeController::class, 'search'])->name('generate.action');
    Route::post('recipes/{recipe}/bookmark', [RecipieController::class, 'bookmark'])->name('recipes.toggleBookmark');
    Route::get('recipes/{filter}/{recipeType}', [RecipieController::class, 'index'])->whereIn('recipeType', ['food', 'cocktail'])->whereIn('filter', ['my', 'all'])->name('recipes.index');
});
