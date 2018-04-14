<?php

namespace App\Http\Controllers\Bike;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class BikeStickerController extends Controller
{

	public function __construct() {
		$this->middleware('api');
	}

    public function purchase() {
    	return [
    		'success' => true
    	];
    }
}
