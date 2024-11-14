<?php

namespace App\Models;

use Laravel\Scout\Searchable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use mathewparet\LaravelPolicyAbilitiesExport\Traits\ExportsPermissions;

/**
 * @property Illuminate\Database\Eloquent\Relations\BelongsToMany<\App\Models\User> $user
 * @property Illuminate\Database\Eloquent\Collection<\App\Models\Like> $likes
 */
class Recipie extends Model
{
    use ExportsPermissions;
    use HasFactory;
    use Searchable;

    protected $fillable = [
        'title',
        'ingredients',
        'directions',
        'recipeType',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'ingredients' => 'array',
            'directions' => 'array',
        ];
    }

    public function toSearchableArray(): array
    {
        $array = array_merge($this->toArray(), [
            'users' => $this->users->pluck('id'),
            'score' => $this->likes()->liked()->count() - $this->likes()->disliked()->count(),
        ]);

        unset($array['can']);

        return $array;
    }

    /**
     * Get the user that owns the Recipie
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany<\App\Models\User>
     */
    public function users()
    {
        return $this->belongsToMany(User::class);
    }

    public function scopeType($qyery, $type)
    {
        return $qyery->where('recipeType', $type);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany<\App\Models\Like>|\App\Models\Like
     */
    public function likes()
    {
        return $this->hasMany(Like::class);
    }

    /**
     * Check if the recipie is bookmarked by the given user
     */
    public function isBookmarkedBy(User $user): bool
    {
        return $this->users()->where('users.id', $user->id)->exists();
    }

    public function isLikedBy(User $user): bool
    {
        return $this->likes()->user($user)->liked()->exists();
    }
    
    public function isDislikedBy(User $user): bool
    {
        return $this->likes()->user($user)->disliked()->exists();
    }
}
