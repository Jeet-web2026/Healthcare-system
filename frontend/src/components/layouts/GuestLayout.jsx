import { Link } from "react-router-dom";

const GuestLayout = ({ children, redirectLink }) => {
  return (
    <main className="h-screen w-full flex justify-center items-center relative">
      <Link
        to={redirectLink}
        className="absolute top-5 left-5 text-blue-600 font-medium border border-blue-300 rounded-md px-3 py-2 hover:bg-blue-50 transition duration-300"
      >
        <i className="ri-arrow-left-line me-1"></i>
        Back
      </Link>
      {children}
    </main>
  );
};
export default GuestLayout;
