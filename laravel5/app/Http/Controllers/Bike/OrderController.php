<?php

namespace App\Http\Controllers\Bike;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\OrderReference;
use App\Order;
use Mail;

use App\Exceptions\BikeException;

class OrderController extends Controller
{
	public function __construct() {
		$this->middleware('api');
    }
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
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $r)
    {
        
        $ref = OrderReference::where('id', 1)->firstOrFail();
        $reference = ++$ref->order_ref;
        $id = $ref->id;
        $ref->updated_at = new \DateTime("now");
        $ref->save();

        $rorder = $r->all();
        $order = new Order();
        $order->reference     = $reference;
        $order->sticker_flag  = $rorder['sticker']['flag']['code'];
        $order->sticker_flagname = $rorder['sticker']['flag']['name'];
        $order->sticker_fname = $rorder['sticker']['fname'];
        $order->sticker_lname = $rorder['sticker']['lname'];
        $order->design_code   = $rorder['design']['code'];
        $order->design_name   = $rorder['design']['name'];
        $order->package_code  = $rorder['package']['code'];
        $order->package_name  = $rorder['package']['name'].' ('.$rorder['package']['detail'].')';
        $order->price         = $rorder['package']['price'];
        $order->bill_fname    = $rorder['billing']['fname'];
        $order->bill_lname    = $rorder['billing']['lname'];
        $order->email         = $rorder['billing']['email'];
        $order->address       = $rorder['billing']['address'];
        $order->phone         = $rorder['billing']['phone'];
        $order->city          = $rorder['billing']['city'];
        $order->state         = '';//$rorder['billing']['state'];
        $order->country       = $rorder['billing']['country'];
        $order->zip           = '';//$rorder['billing']['zip'];
        $order->status        = 'CREATED';
        $order->created_at = new \DateTime("now");

        $order->save();

        Mail::send('emails.order', ['order' => $order], function ($m) use ($order) {
            $m->from('no-reply@proride.com.co', 'ProRide');

            $m
                ->to($order->email, $order->bill_fname.' '.$order->bill_lname)
                ->bcc('jantropberger@gmail.com', 'Jan Tropberger')
                ->bcc('niviadesigner@gmail.com', 'Andres Nivia')
                ->subject('Orden No.'.$order->reference);
        });

        return response()->json([
            //'req' => $r->all(),
            //'captcha' => $result,
            'success' => true,
            'id' => $id,
            'ref' => $reference
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
        $order = Order::where('reference', $id)->firstOrFail();
        return response()->json($order);
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
