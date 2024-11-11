<?php

namespace App\Http\Resources;

use App\Models\Recipie;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;
use mathewparet\LaravelPolicyAbilitiesExport\Resources\ResourceCollectionWithPermissions;

class RecipieResourceCollection extends ResourceCollectionWithPermissions
{
    /**
     * @var \Illuminate\Database\Eloquent\Model|string $model 
     */
    protected $model = Recipie::class;
}