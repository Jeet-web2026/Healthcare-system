import api from "../api/axios";
import GuestLayout from "../components/layouts/GuestLayout";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
  const registrationForm = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/auth/register", {
        email: e.target.email.value,
        password: e.target.password.value,
        confirm_password: e.target.confirm_password.value,
        term_conditions: e.target.term_conditions.checked,
      });

      e.target.reset();
      Swal.fire({
        title: "Registration successful!",
        text: response.data.message,
        icon: "success",
        draggable: false,
      }).then(() => {
        localStorage.setItem("email", response.data.data.email);
        window.location.href = "/email-verification";
      });
    } catch (error) {
      Swal.fire({
        title: "Something went wrong!",
        text: error.response?.data?.message,
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
            <i className="ri-open-arm-line text-blue-500"></i>
          </span>
          Create an Account
        </h2>
        <form
          onSubmit={registrationForm}
          method="post"
          className="flex flex-col gap-3"
        >
          <div>
            <label
              htmlFor="email"
              className="block text-blue-900 font-medium mb-2"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border border-blue-300 w-full rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. john.doe@example.com"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-blue-900 font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="border border-blue-300 w-full rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <div>
            <label
              htmlFor="confirm_password"
              className="block text-blue-900 font-medium mb-2"
            >
              Confirm password
            </label>
            <input
              type="password"
              id="confirm_password"
              name="confirm_password"
              className="border border-blue-300 w-full rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Confirm your password"
            />
          </div>
          <div className="flex flex-row items-center gap-2">
            <input
              type="checkbox"
              name="term_conditions"
              id="term_conditions"
              className="size-4"
            />
            <label
              htmlFor="term_conditions"
              className="text-blue-900 font-medium"
            >
              I agree to the{" "}
              <a href="/terms" className="text-blue-500">
                Terms and Conditions
              </a>
            </label>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white text-lg w-full font-semibold py-2 px-4 rounded-md transition duration-300"
          >
            Get started
          </button>
          <p className="text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500">
              Log in
            </Link>
          </p>
        </form>
      </section>
    </GuestLayout>
  );
};

export default Register;
