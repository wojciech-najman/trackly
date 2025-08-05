<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateItemCheckoutsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('item_checkouts', function (Blueprint $table) {
            $table->id();
            $table->foreignId('company_id')->constrained();
            $table->index('company_id');
            $table->foreignId('store_id')->constrained();
            $table->foreignId('item_id')->constrained();
            $table->foreignId('user_id')->constrained();
            $table->index('store_id');
            $table->index('item_id');
            $table->index('user_id');
            $table->mediumInteger('quantity')->unsigned();
            $table->dateTime('date_from');
            $table->dateTime('date_to')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('item_checkouts');
    }
}
