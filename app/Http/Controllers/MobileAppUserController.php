<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\MobileAppLoginRequest;
use Illuminate\Validation\ValidationException;

class MobileAppUserController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function login(MobileAppLoginRequest $request)
    {
        /**
         * @var User $user
         */
        $user = User::whereEmail($request->email)->first();

        if(!Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.']
            ]);
        }

        $token = $user->createToken($request->device_name);

        return [
            'user' => $user,
            'token' => explode('|', $token->plainTextToken)[1],
        ];
    }
    
    public function logout(Request $request)
    {
        return $request->user()->currentAccessToken()->delete();
    }

    public function user(Request $request)
    {
        return $request->user();
    }
}
