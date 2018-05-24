<?php

use Illuminate\Http\Request;

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
Route::resource('order', 'Bike\OrderController');
Route::get('order/list/{year}/{month}/{week?}', 'Bike\OrderController@list');
Route::resource('contact', 'Bike\ContactUsController');
Route::resource('discount', 'Bike\DiscountController');
Route::post('bikesticker/purchase', 'Bike\BikeStickerController@purchase');


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

