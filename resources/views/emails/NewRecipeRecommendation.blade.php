<x-mail::message>
# We have some new {{ $recipeType }} recipes for you!

Hi {{ $user->name }},

Our elfs has some new {{ $recipeType }} recipes for you.

These recommendations are NOT added to your "My Recipes". If you wish to add them to your "My Recipes", please click on the bookmark button against the recipe.

@foreach($recommendations as $recommendation)
<x-mail::panel>
# {{ $recommendation['title'] }}

## Ingredients

@foreach ($recommendation->ingredients as $ingredient)
1. {{ $ingredient['name'] }}, {{ $ingredient['measurement'] }} @if (isset($ingredient['adjective']) && $ingredient['adjective'] != '') , {{ $ingredient['adjective'] }} @endif

@endforeach

## Instructions

@foreach ($recommendation->directions as $direction)
1. {{ $direction }}
@endforeach

<x-mail::button :url="route('recipes.toggleBookmark', ['recipe' => $recommendation->id, 'from' => 'email'])">Bookmark Recipe</x-mail::button>

</x-mail::panel>
@endforeach

<x-mail::subcopy>
    You are receiving this email because you either have bookmarked or liked recipies on {{ config('app.name') }}. To manage your email subscription settings, <a href="{{ route('profile.show') }}">click here</a> and scroll down to "Subscriptions".
</x-mail::subcopy>

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>
