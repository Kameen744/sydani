<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('our_work_intros', function (Blueprint $table) {
            $table->id();
            $table->text('financing_intro');
            $table->text('sytem_strengthening_intro');
            $table->text('demand_generation_intro');
            $table->text('data_analytics_intro');
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
        Schema::dropIfExists('our_work_intros');
    }
};
