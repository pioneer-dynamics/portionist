<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\RecipeApiController;
use App\Http\Controllers\MobileAppUserController;
use App\Http\Controllers\API\GenerateRecipeApiController;

Route::name('api.')->group(function() {
    Route::post('/login', [MobileAppUserController::class, 'login'])->name('login');

    Route::middleware('auth:sanctum')->group(function() {
        
        Route::controller(MobileAppUserController::class)->group(function() {
            Route::get('/user', 'user')->name('user');
            Route::post('/logout', 'logout')->name('logout');
        });

        Route::post('generate', [GenerateRecipeApiController::class, 'search'])->name('generate');
        Route::post('recipes/{recipe}/bookmark', [RecipeApiController::class, 'bookmark'])->name('recipes.toggleBookmark');
        Route::get('recipes/{filter}/{recipeType}', [RecipeApiController::class, 'index'])->whereIn('recipeType', ['food', 'cocktail'])->whereIn('filter', ['my', 'all'])->name('recipes.index');
    });
});