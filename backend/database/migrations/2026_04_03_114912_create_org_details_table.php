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
        Schema::create('org_details', function (Blueprint $table) {
            $table->id();
            $table->string('primaryLocation');
            $table->text('branches')->nullable();
            $table->string('primaryEmail')->nullable();
            $table->text('secondaryEmails')->nullable();
            $table->dateTime('availableTime')->nullable();
            $table->text('socialmediainfo')->nullable();
            $table->text('termsandconditions')->nullable();
            $table->text('privacypolicy')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('org_details');
    }
};
