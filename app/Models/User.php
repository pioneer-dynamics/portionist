<?php

namespace App\Models;

use Laravel\Sanctum\HasApiTokens;
use App\Notifications\VerifyEmail;
use Laravel\Jetstream\HasProfilePhoto;
use Illuminate\Notifications\Notifiable;
use Laravel\Fortify\TwoFactorAuthenticatable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Notifications\ResetPasswordNotification;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use PioneerDynamics\LaravelPasskey\Traits\HasPasskeys;
use Illuminate\Foundation\Auth\User as Authenticatable;
use PioneerDynamics\LaravelPasskey\Contracts\PasskeyUser;

/**
 * @property Illuminate\Database\Eloquent\Relations\HasMany<App\Models\Recipie> $recipies
 * @property bool $is_super_admin Is this user a super admin
 */
class User extends Authenticatable implements MustVerifyEmail, PasskeyUser
{
    use HasApiTokens;

    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory;

    use HasPasskeys;
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

    /**
     * Override verification notification so that it is sent via queue
     *
     * @return void
     */
    public function sendEmailVerificationNotification()
    {
        $this->notify(new VerifyEmail);
    }

    /**
     * Override reset notification to send via queue
     *
     * @param  string  $token
     * @return void
     */
    public function sendPasswordResetNotification(#[\SensitiveParameter] $token)
    {
        $this->notify(new ResetPasswordNotification($token));
    }
}
