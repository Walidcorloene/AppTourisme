<?php

use App\Http\Controllers\HotelsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get("/hotels", [HotelsController::class, "getHotels"]);
Route::get("/hotels/{hotelId}", [HotelsController::class, "getHotelById"]);
Route::post("/hotels", [HotelsController::class, "createHotel"]);
Route::patch("/hotels/{hotel}", [HotelsController::class, "updateHotel"]);
Route::delete("/hotels/{hotel}", [HotelsController::class, "deleteHotel"]);
