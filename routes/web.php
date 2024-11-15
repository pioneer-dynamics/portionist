<?php

use App\Http\Controllers\GenerateRecipeController;
use App\Http\Controllers\HomePageController;
use App\Http\Controllers\RecipieController;
use Illuminate\Support\Facades\Route;

Route::get('/', HomePageController::class)->name('home');

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('generate', [GenerateRecipeController::class, 'form'])->name('generate.form');
    Route::post('generate', [GenerateRecipeController::class, 'generate'])->name('generate.action');
    Route::get('recipes/{recipe}/bookmark', [RecipieController::class, 'bookmark'])->name('recipes.toggleBookmark');
    Route::get('recipes/{recipe}/like', [RecipieController::class, 'like'])->name('recipes.like');
    Route::get('recipes/{recipe}/dislike', [RecipieController::class, 'dislike'])->name('recipes.dislike');
    Route::redirect('recipes', '/recipes/my/cocktail')->name('recipes.home');
    Route::redirect('recipes/{filter}', '/recipes/{filter}/cocktail')->name('recipes.list');
    Route::get('recipes/{filter}/{recipeType}', [RecipieController::class, 'index'])->whereIn('recipeType', ['food', 'cocktail'])->whereIn('filter', ['my', 'all'])->name('recipes.index');
});
