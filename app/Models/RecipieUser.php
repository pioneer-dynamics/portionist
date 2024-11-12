<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;

class RecipieUser extends Pivot
{
    public static function boot()
    {
        parent::boot();

        static::deleted(function ($item) {
            Recipie::find($item->recipie_id)->touch();
        });
    }
}
