<?php

namespace App\Jobs;

use App\Mail\VerifyEmailOtpMail;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;

class SendEmailVerificationJob implements ShouldQueue
{
    use Queueable, Dispatchable, InteractsWithQueue, SerializesModels;

    public int $tries = 3;
    public function __construct(
        public string $email,
        public int $otp
    ) {}

    public function backoff(): int
    {
        return 10;
    }

    public function handle(): void
    {
        try {
            Mail::to($this->email)
                ->send(new VerifyEmailOtpMail($this->otp));
        } catch (\Throwable $th) {
            throw $th;
        }
    }
}
