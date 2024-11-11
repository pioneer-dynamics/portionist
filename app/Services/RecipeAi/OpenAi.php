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

        foreach($response['cocktails'] as $cocktail)
        {
            $this->recipes->push([
                'ingredients' => $cocktail['ingredients'],
                'name' => $cocktail['name'],
                'directions' => $cocktail['directions'],
            ]);
        }
    }

    private function prepareRequest(?int $count): array
    {
        $question = $this->prepareQuestion($count);

        return [
            'model' => $this->config['engine'],
            'messages' => [
                [
                    'role' => 'user',
                    'content' => $question
                ]
            ],
            'response_format' => [
                'type' => 'json_object'
            ]
        ];
    }

    private function prepareQuestion(?int $count): string
    {
        return __("Invent :number new :type recipies using :ingredients. Respond in json format as an array of ingredients, array of directions and a name for the :type. The root element should be 'cocktails'", [
            'number' =>  $count ?? config('recipie-ai.count'),
            'type' => $this->recipeType,
            'ingredients' => implode(',', $this->ingredients)]);
    }
}