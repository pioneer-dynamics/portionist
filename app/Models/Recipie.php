<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use mathewparet\LaravelPolicyAbilitiesExport\Traits\ExportsPermissions;

/**
 * @property Illuminate\Database\Eloquent\Relations\BelongsToMany<\App\Models\User> $user
 */
class Recipie extends Model
{
    use HasFactory;
    use ExportsPermissions;

    protected $fillable = [
        'title',
        'ingredients',
        'directions',
        'recipeType',
    ];

    protected $appends = [
        'is_saved'
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

    public function isSaved(): Attribute
    {
        return Attribute::make(
            get: fn () => $this->users()->where('users.id', request()->user()->id)->exists(),
        );
    }

    public function scopeType($qyery, $type)
    {
        return $qyery->where('recipeType', $type);
    }
}
