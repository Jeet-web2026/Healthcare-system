<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dateTime('verification_time')->nullable();
            $table->dateTime('last_login')->nullable();
            $table->boolean('is_active')->default(false);
            $table->bigInteger('otp')->nullable();

            $table->index('email', 'id');
        });
    }
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dateTime('verification_time')->nullable();
            $table->dateTime('last_login')->nullable();
            $table->boolean('is_active')->default(false);
            $table->bigInteger('otp')->nullable();

            $table->index('email', 'id');
        });
    }
};
