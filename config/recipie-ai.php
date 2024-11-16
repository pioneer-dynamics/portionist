<?php

use App\Services\RecipeAi\OpenAi;

return [
    'default' => env('RECIPE_AI_CONNECTION', 'openai'),
    'connections' => [
        'openai' => [
            'class' => OpenAi::class,
            'config' => [
                'url' => 'https://api.openai.com/v1',
                'token' => env('OPENAI_API_KEY'),
                'engine' => env('OPENAI_ENGINE', 'gpt-4o-mini'),
            ],
        ],
    ],
    'count' => (int) env('RECIPE_AI_COUNT', 10),
    'recommendations' => [
        'count' => (int) env('RECIPE_AI_RECOMMENDATIONS_COUNT', 1),
        'based_on_count' => (int) env('RECIPE_AI_RECOMMENDATIONS_FETCH_COUNT', 3),
    ]
];
