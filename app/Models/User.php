<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Fortify\TwoFactorAuthenticatable;
use Laravel\Jetstream\HasProfilePhoto;
use Laravel\Sanctum\HasApiTokens;
use PioneerDynamics\LaravelPasskey\Contracts\PasskeyUser;
use PioneerDynamics\LaravelPasskey\Traits\HasPasskeys;

/**
 * @property Illuminate\Database\Eloquent\Relations\HasMany<App\Models\Recipie> $recipies
 * @property bool $is_super_admin Is this user a super admin
 */
class User extends Authenticatable implements MustVerifyEmail, PasskeyUser
{
    use HasApiTokens;
    use HasPasskeys;

    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory;
    use HasProfilePhoto;
    use Notifiable;
    use TwoFactorAuthenticatable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    protected $with = [
        'passkeys',
    ];

    protected $touches = ['recipies'];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
        'two_factor_recovery_codes',
        'two_factor_secret',
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array<int, string>
     */
    protected $appends = [
        'profile_photo_url',
        'is_super_admin',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    /**
     * Get all of the recipies for the User
     * 
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany<\App\Models\Recipie>
     */
    public function recipies()
    {
        return $this->belongsToMany(Recipie::class)->using(RecipieUser::class);
    }

    public function isSuperAdmin(): Attribute
    {
        return Attribute::make(
            get: fn () => $this->id === 1,
        );  
    }
}
