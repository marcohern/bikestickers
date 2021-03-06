@extends('emails.layout')

@section('content')
<p>
    <div style="float:right;color:white;background-color:#009fe2;text-align:center;padding:8px;font-size:16px;margin-left:12px;margin-bottom:12px;border-radius:6px;">
        <p style="margin:2px;">Orden de Compra No.</p>
        <p style="margin:2px;font-size:28px"><strong>{{ $order->reference }}</strong></p>
    </div>
    <span style="color:#009fe2;font-size:32px;">¡Felicitaciones!</span>
</p>
<p>Hola <strong>{{ $order->bill_fname }} {{ $order->bill_lname }}</strong> felicitaciones por tu compra y adquirir un producto de calidad para la personalización de tu bici y lucir como un Pro.</p>
<p>
    Has ordenado el diseño <strong>{{ $order->design_name }}</strong>
    con el nombre <strong>{{ $order->sticker_fname }} {{ $order->sticker_lname }}</strong>
    y el país <strong>{{ $order->sticker_flagname }}</strong> con un <strong>{{ $order->package_name }}</strong>.</p>
<p><span style="color:#009fe2;font-size:16px;">Producto</span></p>
<ul>
    <li><strong>Bandera:</strong> <img src="http://www.proride.com.co/bikestickers/assets/country-flags/png100px/{{ strtolower($order->sticker_flag) }}.png" height="48px" width="auto" /></li>
    <li><strong>País:</strong> {{ $order->sticker_flagname }}</li>
    <li><strong>Nombre:</strong> {{ $order->sticker_fname }}</li>
    <li><strong>Apellido:</strong> {{ $order->sticker_lname }}</li>
    <li><strong>Diseño:</strong> {{ $order->design_name }}</li>
    <li><strong>Paquete:</strong> {{ $order->package_name }}</li>
    <li style="font-size:18px"><strong>Precio:</strong> $ {{ number_format($order->price, 0, ",", ".") }}</li>
</ul>
<p><span style="color:#009fe2;font-size:16px;">Cliente</span></p>
<ul>
    <li><strong>Nombre:</strong> {{ $order->bill_fname }} {{ $order->bill_lname }}</li>
    <li><strong>Email:</strong> {{ $order->email }}</li>
    <li><strong>Dirección:</strong> {{ $order->address }}</li>
    <li><strong>Teléfono:</strong> {{ $order->phone }}</li>
    <li><strong>Ciudad:</strong> {{ $order->city }}</li>
    <li><strong>País:</strong> {{ $order->country }}</li>
</ul>
<p>En el transcurso de las próximas 24 horas un asesor te contactará vía telefónica o E-mail, para coordinar el pago y hacerla la entrega de tu producto.</p>
<p>Recuerda que trabajamos con materiales en vinilos plasticados y tintas de alta calidad, pero la durabilidad y garantía corresponderá de la manipulación e instalación correcta del producto.</p>
<p>Lee aquí nuestra Política de Envío y Garantías: http://www.proride.com.co/shipping</p>
<p>Todos nuestros productos PRORIDE tienen una garantía de 12 meses a partir de la fecha de facturación y cubre defectos de fabricación.</p>
<p>Esta orden puedes verla online aquí: http://www.proride.com.co/summary/{{ $order->reference }}</p>
<p>Muchas gracias por tu compra</p>
<p></p>
<p>
<br>Equipo
<br><strong>Proride</strong>
<br>Calle 134 No. 89a - 52
<br>Bogotá Colombia
<br>Attn: Legal
<br><a href="http://www.proride.com.co">www.proride.com.co</a>
</p>

@endsection