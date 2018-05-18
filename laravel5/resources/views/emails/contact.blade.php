@extends('emails.layout')

@section('content')
<h2>{{ $contact->name }} ({{ $contact->email }}) hace un Comentario:</h2>
<p></p>
<p></p>
<p><strong>{{$contact->comments }}</strong></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
@endsection