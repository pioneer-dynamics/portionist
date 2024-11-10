<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property Illuminate\Database\Eloquent\Relations\BelongsToMany<\App\Models\User> $user
 */
class Recipie extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'ingredients',
        'directions',
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

    /**
     * Get the user that owns the Recipie
     * 
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany<\App\Models\User>
     */
    public function users()
    {
        return $this->belongsToMany(User::class);
    }
}
