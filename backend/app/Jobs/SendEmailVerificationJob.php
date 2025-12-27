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

    public function __construct(
        public string $email,
        public int $otp
    ) {}

    public function handle(): void
    {
        Mail::to($this->email)
            ->send(new VerifyEmailOtpMail($this->otp));
    }
}
