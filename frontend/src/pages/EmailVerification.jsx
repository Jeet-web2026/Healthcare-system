import GuestLayout from "../components/layouts/GuestLayout";
import { useState, useEffect } from "react";
import api from "../api/axios";
import Swal from "sweetalert2";

const EmailVerification = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(null);

  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  useEffect(() => {
    const isComplete = otp.every((digit) => digit !== "");

    if (isComplete) {
      if (timer) clearTimeout(timer);

      const timeout = setTimeout(() => {
        submitOtp();
      }, 500);

      setTimer(timeout);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [otp]);

  const submitOtp = async (e) => {
    const finalOtp = otp.join("");

    try {
      const res = await api.post("/auth/email-verification", {
        email: localStorage.getItem("email"),
        otp: finalOtp,
      });

      Swal.fire({
        title: "Verification successful!",
        text: res.data.message,
        icon: "success",
        draggable: false,
      }).then(() => {
        localStorage.setItem("healthCare_auth_token", res.data.data.auth_token);
        window.location.href = "/make-appointment";
      });
    } catch (err) {
      Swal.fire({
        title: "Verification failed!",
        text: err.response?.data?.message,
        icon: "error",
        draggable: false,
      });
    }
  };
  return (
    <GuestLayout redirectLink="/">
      <section className="lg:w-1/2 w-full mx-5 lg:mx-0 bg-blue-50 shadow-md rounded-lg p-8 flex flex-col gap-7">
        <h2 className="text-blue-900 font-bold lg:text-3xl text-2xl">
          <span className="me-2.5 border rounded-full px-1.5 py-1 lg:text-2xl border-blue-300">
            <i className="ri-mail-line text-blue-500"></i>
          </span>
          Email Verification
        </h2>
        <form className="flex flex-col gap-7">
          <p className="text-blue-900 text-lg">
            Please check your registered email for OTP.
          </p>
          <div className="flex gap-2 justify-center">
            {otp.map((digit, i) => (
              <input
                key={i}
                id={`otp-${i}`}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e.target.value, i)}
                className="w-full h-11 text-center border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ))}
          </div>
        </form>
      </section>
    </GuestLayout>
  );
};
export default EmailVerification;
