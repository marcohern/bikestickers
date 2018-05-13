<?php

use Illuminate\Database\Seeder;
use App\OrderReference;

class OrderReferenceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $reference = [
            ['id' => 1, 'order_ref' => 1980000, 'created_at' => new \DateTime("now") ]
        ];

        OrderReference::insert($reference);
    }
}
