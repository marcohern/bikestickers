<?php

namespace App\Http\Controllers\Bike;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\OrderReference;
use App\Order;

use App\Exceptions\BikeException;

class OrderController extends Controller
{
	public function __construct() {
		$this->middleware('api');
    }
    
    private function verifyCaptcha(string $token) {
        $post_data = http_build_query(
            array(
                'secret' => '6Lcq4FgUAAAAANEYwYKdRUnM9bn426VyWPrpaT6F',
                'response' => $token,
                'remoteip' => $_SERVER['REMOTE_ADDR']
            )
        );
        $opts = array('http' =>
            array(
                'method'  => 'POST',
                'header'  => 'Content-type: application/x-www-form-urlencoded',
                'content' => $post_data
            )
        );
        $context  = stream_context_create($opts);
        $response = file_get_contents('https://www.google.com/recaptcha/api/siteverify', false, $context);
        $result = json_decode($response);
        if (!$result->success) {
            throw new BikeException('CAPTCHA verification failed.', 1);
        }
        return $result;
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
        $captcha = $this->verifyCaptcha($r->input('token'));
        
        $ref = OrderReference::where('id', 1)->firstOrFail();
        $reference = ++$ref->order_ref;
        $id = $ref->id;
        $ref->updated_at = new \DateTime("now");
        $ref->save();

        $rorder = $r->all();
        $order = new Order();
        $order->reference = $reference;
        $order->sticker_flag = $rorder['sticker']['flag']['code'];
        $order->sticker_fname = $rorder['sticker']['fname'];
        $order->sticker_lname = $rorder['sticker']['lname'];
        $order->design_code = $rorder['design']['code'];
        $order->design_name = $rorder['design']['name'];
        $order->package_code = $rorder['package']['code'];
        $order->package_name = $rorder['package']['name'];
        $order->price = $rorder['package']['price'];
        $order->status = 'CREATED';
        $order->created_at = new \DateTime("now");

        $order->save();

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
