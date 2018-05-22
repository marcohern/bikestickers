<?php

namespace App\Http\Controllers\Bike;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Mail;

class ContactUsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $r)
    {
        //
        $contact = new \stdClass();
        $contact->name = $r->input('name');
        $contact->email = $r->input('email');
        $contact->comments = $r->input('comments');

        Mail::send('emails.contact', ['contact' => $contact], function ($m) use ($contact) {
            $m->replyTo($contact->email, $contact->name);

            $m->to(config('proride.email.info.email'), config('proride.email.info.name'))
              ->subject($contact->name.' Comenta');
        });
        return response()->json([
            'success' => true,
            'id' => 0,
            'ref' => 0
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
