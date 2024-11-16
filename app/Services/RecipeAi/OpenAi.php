<?php

namespace App\Services\RecipeAi;

use App\Contracts\RecipeAi;
use Illuminate\Http\Client\Response;

class OpenAi extends RecipeAiProvider implements RecipeAi
{
    public function ask(?int $count = null): RecipeAi
    {
        $request = $this->prepareRequest($count);

        $response = $this->http->contentType('application/json')->post('/chat/completions', $request);

        $this->parseResponse($response);

        return $this;
    }

    private function parseResponse(Response $response)
    {
        $this->recipes = collect();

        $response = json_decode($response->json('choices.0.message.content'), true);

        foreach ($response['recipes'] as $recipes) {
            $this->recipes->push([
                'ingredients' => $recipes['ingredients'],
                'title' => $recipes['name'],
                'directions' => $recipes['directions'],
            ]);
        }
    }

    private function getResponseFormat(): array
    {
        return [
            'type' => 'json_schema',
            'json_schema' => [
                'name' => 'recipes',
                'schema' => [
                    'type' => 'object',
                    'properties' => [
                        'recipes' => [
                            'type' => 'array',
                            'items' => [
                                'type' => 'object',
                                'properties' => [
                                    'name' => [
                                        'type' => 'string',
                                    ],
                                    'ingredients' => [
                                        'type' => 'array',
                                        'items' => [
                                            'type' => 'object',
                                            "properties" => [
                                                "name" => [
                                                    "type" => "string",
                                                ],
                                                "measurement" => [
                                                    "type" => "string",
                                                ],
                                                "adjective" => [
                                                    "type" => "string",
                                                ]
                                            ],
                                            "required" => [
                                                "name",
                                                "measurement",
                                                "adjective"
                                            ],
                                            "additionalProperties" => false,
                                        ],
                                    ],
                                    'directions' => [
                                        'type' => 'array',
                                        'items' => [
                                            'type' => 'string',
                                        ],
                                    ],
                                ],
                                'required' => [
                                    'name',
                                    'directions',
                                    'ingredients',
                                ],
                                'additionalProperties' => false,
                            ],
                        ],
                    ],
                    'required' => [
                        'recipes',
                    ],
                    'additionalProperties' => false,
                ],
                'strict' => true,
            ],
        ];
    }

    private function prepareRequest(?int $count): array
    {
        return [
            'model' => $this->config['engine'],
            'messages' => [
                $this->prepareInstructions(),
                $this->prepareUserInput($count),
            ],
            'response_format' => $this->getResponseFormat(),
        ];
    }

    private function prepareInstructions(): array
    {
        return [
            'role' => 'system',
            'content' => 'You are a helpful bartender and chef. You will be provided with the ingredients, the recipe type (cocktail or food), and the number of recipies to be generated. You need to create new recipies with the ingredients provided for the recipie type specified. For each recipe provide a name, ingredients, and directions.',
        ];
    }

    private function prepareUserInput(?int $count): array
    {
        $question = __('Invent :number new :type recipies using :ingredients.', [
            'number' => $count ?? config('recipie-ai.count'),
            'type' => $this->recipeType,
            'ingredients' => implode(',', $this->ingredients)]);

        return [
            'role' => 'user',
            'content' => $question,
        ];
    }
}
