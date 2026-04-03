<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('whoweares', function (Blueprint $table) {
            $table->id();
            $table->foreignId('org_details_id')->constrained('org_details')->onDelete('cascade');
             $table->string('subheading')->nullable();
            $table->string('heading');
            $table->text('description')->nullable();
            $table->string('image_url')->nullable();
            $table->text('keypoints')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('whoweares');
    }
};
