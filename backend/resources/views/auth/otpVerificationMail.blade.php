<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OTP Verification</title>
</head>

<body style="margin:0; padding:0; background:#f4f6f9; font-family:Arial, sans-serif;">

    <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f9; padding:20px;">
        <tr>
            <td align="center">

                <!-- Card -->
                <table width="100%" max-width="500px" cellpadding="0" cellspacing="0"
                    style="background:#ffffff; border-radius:12px; padding:30px; box-shadow:0 10px 25px rgba(0,0,0,0.08);">

                    <!-- Logo -->
                    <tr>
                        <td align="center" style="padding-bottom:20px;">
                            <h2 style="margin:0; color:#4f46e5;">🔐 Verify Your Email</h2>
                        </td>
                    </tr>

                    <!-- Message -->
                    <tr>
                        <td align="center" style="color:#555; font-size:16px; line-height:1.6;">
                            Hello 👋,<br><br>
                            Use the OTP below to verify your email address.<br>
                            This code is valid for a short time.
                        </td>
                    </tr>

                    <!-- OTP Box -->
                    <tr>
                        <td align="center" style="padding:30px 0;">
                            <div style="
                                display:inline-block;
                                padding:15px 30px;
                                font-size:28px;
                                letter-spacing:8px;
                                font-weight:bold;
                                color:#111111;
                                background:linear-gradient(135deg, #6366f1, #8b5cf6);
                                border-radius:10px;
                                box-shadow:0 5px 15px rgba(99,102,241,0.4);
                                animation: fadeIn 1s ease-in-out;
                            ">
                                {{ $otp }}
                            </div>
                        </td>
                    </tr>

                    <!-- Info -->
                    <tr>
                        <td align="center" style="color:#888; font-size:14px;">
                            If you didn't request this, you can safely ignore this email.
                        </td>
                    </tr>

                    <!-- Button -->
                    <tr>
                        <td align="center" style="padding-top:25px;">
                            <a href="http://localhost:5173/"
                                style="
                                text-decoration:none;
                                padding:12px 25px;
                                background:#4f46e5;
                                color:#ffffff;
                                border-radius:6px;
                                font-size:14px;
                                font-weight:bold;
                                display:inline-block;
                                transition:all 0.3s ease;
                               ">
                                Verify Now
                            </a>
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td align="center" style="padding-top:30px; font-size:12px; color:#aaa;">
                            © {{ date('Y') }} Your Company. All rights reserved.
                        </td>
                    </tr>

                </table>

            </td>
        </tr>
    </table>

</body>

</html>