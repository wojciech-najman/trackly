<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStockTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('stock', function (Blueprint $table) {
            $table->id();
            $table->foreignId('company_id')->constrained();
            $table->index('company_id');
            $table->foreignId('store_id')->constrained();
            $table->foreignId('item_id')->constrained();
            $table->index('store_id');
            $table->index('item_id');
            $table->mediumInteger('quantity')->unsigned();
            $table->mediumInteger('low_stock')->unsigned();
            $table->softDeletes();
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
        Schema::dropIfExists('stock');
    }
}
