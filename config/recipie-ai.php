<?php

use App\Services\RecipeAi\OpenAi;

return [
    'default' => env('RECIPE_AI_CONNECTION', 'openai'),
    'connections' => [
        'openai' => [
            'class' => OpenAi::class,
            'config' => [
                'url' => "https://api.openai.com/v1",
                'token' => env('OPENAI_API_KEY'),
                'engine' => env('OPENAI_ENGINE', 'gpt-3.5-turbo'),
            ]
        ]
    ],
    'count' => (int)env('RECIPE_AI_COUNT', 10),
];