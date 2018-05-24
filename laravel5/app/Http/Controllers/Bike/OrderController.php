<?php

namespace App\Http\Controllers\Bike;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
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
        $order->price         = $rorder['billing']['total'];
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

            $m->to($order->email, $order->bill_fname.' '.$order->bill_lname)
              ->bcc(config('proride.email.owner.email'), config('proride.email.from.name'))
              //->bcc(config('proride.email.info.email'), config('proride.email.info.name'))
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

    private function enc($value, $to=null) {
        if (empty($to)) return $value;
        return iconv('UTF-8',$to,$value);
    }

    public function list(Request $r, $year, $month, $week = null) {
        $start = new \DateTime("$year-$month-1");
        $end = null;
        if (!empty($week)) {
            $wd = 0+$start->format("N");
            $wd = $wd-1;
            $add = ($week-1)*7;
            $start->sub(new \DateInterval("P{$wd}D"));
            $start->add(new \DateInterval("P{$add}D"));
            $end = clone $start;
            $end->add(new \DateInterval("P7D"));
        } else {
            $end = clone $start;
            $end->add(new \DateInterval("P1M"));
            $end->sub(new \DateInterval("P1D"));
        }

        $to = null;
        if ($r->input('enc') == 'excel') $to = 'Windows-1252';
        $timest = "$year-$month";
        if (!empty($week)) $timest.="-$week";
        $headers = array(
            "Content-type" => "text/csv",
            "Content-Disposition" => "attachment; filename=bikestickers-orders-$timest.csv",
            "Pragma" => "no-cache",
            "Cache-Control" => "must-revalidate, post-check=0, pre-check=0",
            "Expires" => "0"
        );
    
        $orders = Order::whereBetween('created_at',[$start, $end])->get();
        $columns = array(
            $this->enc('Orden No.',$to),
            $this->enc('Fecha',$to),
            $this->enc('País (P)',$to),
            $this->enc('Nombre (P)',$to),
            $this->enc('Apellido (P)',$to),
            $this->enc('Diseño',$to),
            $this->enc('Paquete',$to),
            $this->enc('Precio',$to),
            $this->enc('Nombre',$to),
            $this->enc('Apellido',$to),
            $this->enc('Email',$to),
            $this->enc('Direccion',$to),
            $this->enc('Ciudad',$to),
            $this->enc('País',$to),
            $this->enc('Teléfono',$to)
        );
    
        $callback = function() use ($orders, $columns, $to, $start, $end)
        {
            $file = fopen('php://output', 'w');

            fputcsv($file, $columns);
    
            foreach($orders as $order) {
                
                fputcsv($file, array(
                    $this->enc($order->reference, $to),
                    $this->enc($order->created_at, $to),
                    $this->enc($order->sticker_flagname, $to),
                    $this->enc($order->sticker_fname, $to),
                    $this->enc($order->sticker_lname, $to),
                    $this->enc($order->design_name, $to),
                    $this->enc($order->package_name, $to),
                    $this->enc($order->price, $to),
                    $this->enc($order->bill_fname, $to),
                    $this->enc($order->bill_lname,$to),
                    $this->enc($order->email,$to),
                    $this->enc($order->address,$to),
                    $this->enc($order->city,$to),
                    $this->enc($order->country,$to),
                    $this->enc($order->phone,$to)
                ));
            }
            fputcsv($file, ['Desde',$start->format('Y-m-d'), 'Hasta', $end->format('Y-m-d')]);
            fclose($file);
        };
        return response()->stream($callback, 200, $headers);
        /*
        return response()->json([
            'year' => $year,
            'month' => $month,
            'start' => $start,
            'end' => $end,
            'orders' => $orders
        ]);*/
    }
}
