<?php

use App\Http\Controllers\MobileAppUserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::name('api.')->group(function() {
    Route::post('/login', [MobileAppUserController::class, 'login'])->name('login');

    Route::middleware('auth:sanctum')->group(function() {
        
        Route::controller(MobileAppUserController::class)->group(function() {
            Route::get('/user', 'user')->name('user');
            Route::post('/logout', 'logout')->name('logout');
        });
    });
});