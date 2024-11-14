<?php

namespace App\Http\Requests;

use App\Models\Recipie;
use Illuminate\Foundation\Http\FormRequest;

class GenerateRecipeRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return $this->user()->can('generate', Recipie::class);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'ingredients' => 'required|array|min:1',
            'ingredients.*' => 'required|string',
            'recipeType' => 'required|in:cocktail,food',
        ];
    }

    public function attributes()
    {
        return [
            'recipeType' => 'recipe type',
        ];
    }
}
