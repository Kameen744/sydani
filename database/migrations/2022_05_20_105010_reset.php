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
        Schema::dropIfExists('galleries');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::create('galleries', function (Blueprint $table) {
            $table->id();
            $table->string('image');
            $table->unsignedBigInteger('intern_id');
            $table->boolean('profile_image')->default(false);
            $table->timestamps();
        });

        Schema::table('galleries', function (Blueprint $table) {
            $table->foreign('intern_id')
                ->references('id')
                ->on('interns')
                ->onDelete('cascade');
        });
    }
};
