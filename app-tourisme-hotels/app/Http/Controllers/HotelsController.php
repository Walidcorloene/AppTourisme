<?php

namespace App\Http\Controllers;

use App\Models\Hotel;
use Illuminate\Http\Request;

class HotelsController extends Controller
{
    public function getHotels() {
        return Hotel::all();
    }

    public function getHotelById($hotelId) {
        return Hotel::where("id", $hotelId)->get();
    }

    public function createHotel(Request $request) {
        if( isset($request->nom) && isset($request->description) && isset($request->lat) && isset($request->lng) ) {
            return Hotel::create([
                "nom" => request("nom"),
                "description" => request("description"),
                "lat" => request("lat"),
                "lng" => request("lng"),
                "image" => request("image")
            ]);
        } else {
            return ["message" => "Une erreur s'est produite, veuillez réessayer plus tard."];
        }
    }

    public function updateHotel(Hotel $hotel) {
        if(request("nom")) {
            $hotel->update([
                "nom" => request('nom')
            ]);
        }
        if(request("description")) {
            $hotel->update([
                "description" => request('description')
            ]);
        }
        if(request("lat")) {
            $hotel->update([
                "lat" => request('lat')
            ]);
        }
        if(request("lng")) {
            $hotel->update([
                "lng" => request('lng')
            ]);
        }
        if(request("image")) {
            $hotel->update([
                "image" => request('lng')
            ]);
        }
        return [$hotel];
    }

    public function deleteHotel(Hotel $hotel) {
        $success = $hotel->delete();
        if($success) {
            return ["message" => "Hotel supprimer avec succès"];
        } else {
            return ["message" => "Une erreur s'est produite, veuillez réessayer plus tard."];
        }
    }
}