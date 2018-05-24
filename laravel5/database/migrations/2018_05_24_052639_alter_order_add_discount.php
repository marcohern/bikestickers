<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AlterOrderAddDiscount extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::table('order', function (Blueprint $table) {
            $table->string('discount_code', 32)->default('');
            $table->decimal('discount', 22, 8)->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        Schema::table('order', function (Blueprint $table) {
            $table->dropColumn('discount');
            $table->dropColumn('discount_code');
        });
    }
}
