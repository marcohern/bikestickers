<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/'             , function () { return view('blank'); });
Route::get('/name-and-flag', function () { return view('blank'); });
Route::get('/design'       , function () { return view('blank'); });
Route::get('/package'      , function () { return view('blank'); });
Route::get('/billing'      , function () { return view('blank'); });
Route::get('/summary/{id}' , function () { return view('blank'); });
Route::get('/about'        , function () { return view('blank'); });
Route::get('/news'         , function () { return view('blank'); });
Route::get('/contact'      , function () { return view('blank'); });
Route::get('/privacy'      , function () { return view('blank'); });
Route::get('/shipping'     , function () { return view('blank'); });

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
