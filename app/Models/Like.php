<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property \App\Models\User $user
 * @property \App\Models\Recipie $Recipie
 *
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Like user(\App\Models\User $user)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Like liked()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Like disliked()
 */
class Like extends Model
{
    /** @use HasFactory<\Database\Factories\LikeFactory> */
    use HasFactory;

    protected $fillable = ['user_id', 'recipie_id', 'liked'];

    protected function casts()
    {
        return [
            'liked' => 'boolean',
        ];
    }

    /**
     * @return \Illuminate\Database\Eloquent\Builder<\App\Models\User>
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function recipie(): BelongsTo
    {
        return $this->belongsTo(Recipie::class);
    }

    public function scopeUser(Builder $query, User $user)
    {
        return $query->where('user_id', $user->id);
    }

    public function scopeLiked(Builder $query)
    {
        return $query->where('liked', true);
    }

    public function scopeDisliked(Builder $query)
    {
        return $query->where('liked', false);
    }
}
