<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateItemNotesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('item_notes', function (Blueprint $table) {
            $table->id();
            $table->foreignId('company_id')->constrained();
            $table->index('company_id');
            $table->foreignId('item_id')->constrained();
            $table->foreignId('user_id')->constrained();
            $table->index('item_id');
            $table->index('user_id');
            $table->text('note');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('item_notes');
    }
}
