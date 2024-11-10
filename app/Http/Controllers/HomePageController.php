<?php

namespace App\Http\Controllers;

use App\Models\Recipie;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Route;

class HomePageController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $totalRecipes = Cache::remember('totalRecipes', 60, fn() => Recipie::count());

        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'totalRecipes' => $totalRecipes
        ]);
    }
}
