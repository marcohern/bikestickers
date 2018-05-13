<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrderTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('order', function (Blueprint $table) {
            $table->increments('id');
            $table->string('reference', 32)->unique();
            $table->string('sticker_flag' , 6);
            $table->string('sticker_fname', 128);
            $table->string('sticker_lname', 128);
            $table->string('design_code', 32);
            $table->string('design_name', 128);
            $table->string('package_code', 32);
            $table->string('package_name', 128);
            $table->decimal('price', 18, 2);
            $table->enum('status', ['CREATED','VOID','PAYED'])->default('CREATED');

            $table->string('bill_fname', 128);
            $table->string('bill_lname', 128);
            $table->string('email', 128)->unique();
            $table->string('address', 128);
            $table->string('phone', 64);
            $table->string('city', 128);
            $table->string('state', 128);
            $table->string('country', 128);
            $table->string('zip', 8);
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('order');
    }
}
