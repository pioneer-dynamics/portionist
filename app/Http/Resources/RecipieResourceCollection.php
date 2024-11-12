<?php

namespace App\Http\Resources;

use App\Models\Recipie;
use mathewparet\LaravelPolicyAbilitiesExport\Resources\ResourceCollectionWithPermissions;

class RecipieResourceCollection extends ResourceCollectionWithPermissions
{
    /**
     * @var \Illuminate\Database\Eloquent\Model|string
     */
    protected $model = Recipie::class;
}
