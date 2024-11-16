<?php

use App\Notifications\NewRecipeRecommendation;

return [
    'items' => [
        [
            'class' => NewRecipeRecommendation::class,
            // 'label' => 'New Recipe Recommendations',
            'channels' => ['mail'],
        ],
    ],
];
