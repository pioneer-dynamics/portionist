<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class RecipieResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return array_merge(parent::toArray($request), [
            'is_saved' => request()->user()
                            ? $this->resource->isBookmarkedBy(request()->user())
                            : null,
            'is_liked' => $this->when(
                request()->user(),
                $this->resource->isLikedBy(request()->user())
                ? true
                : ($this->resource->isDislikedBy(request()->user()) ? false : null)
            ),
            'num_likes' => $this->when(
                request()->user(),
                $this->resource->likes()->liked()->count()
            ),
            'num_dislikes' => $this->when(
                request()->user(),
                $this->resource->likes()->disliked()->count()
            ),
        ]);
    }
}
