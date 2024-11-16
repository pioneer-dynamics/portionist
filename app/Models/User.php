<?php

namespace App\Models;

use App\Notifications\ResetPasswordNotification;
use App\Notifications\VerifyEmail;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Fortify\TwoFactorAuthenticatable;
use Laravel\Jetstream\HasProfilePhoto;
use Laravel\Sanctum\HasApiTokens;
use LiranCo\NotificationSubscriptions\Traits\HasNotificationSubscriptions;
use PioneerDynamics\LaravelPasskey\Contracts\PasskeyUser;
use PioneerDynamics\LaravelPasskey\Traits\HasPasskeys;

/**
 * @property Illuminate\Database\Eloquent\Relations\HasMany<App\Models\Recipie> $recipies
 * @property bool $is_super_admin Is this user a super admin
 * @property Illuminate\Database\Eloquent\Collection<\App\Models\Like> $likes
 */
class User extends Authenticatable implements MustVerifyEmail, PasskeyUser
{
    use HasApiTokens;
    use HasNotificationSubscriptions;

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

    protected $touches = ['recipies'];

    protected $with = [
        'notificationSubscriptions',
    ];

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
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany<\App\Models\Recipie>|\App\Models\Recipie
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

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany<\App\Models\Like>|\App\Models\Like
     */
    public function likes()
    {
        return $this->hasMany(Like::class);
    }
}
