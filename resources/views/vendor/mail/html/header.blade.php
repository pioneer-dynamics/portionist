@props(['url'])
<tr>
<td class="header">
<a href="{{ $url }}" style="display: inline-block;">
 <img width="100" height="100" src="data:image/png;base64,{{ base64_encode(file_get_contents(Vite::asset('resources/static/logo.png'))) }}"/>
</a>
</td>
</tr>
