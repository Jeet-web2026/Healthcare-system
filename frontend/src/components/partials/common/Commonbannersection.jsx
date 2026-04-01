import { Link } from "react-router-dom";

const Commonbannersection = ({ title }) => {
  return (
    <main className="h-70 w-full bg-blue-800 flex flex-col gap-4 items-center justify-center rounded-xl mb-4">
      <h1 className="text-white text-6xl tracking-wide font-bold">{title}</h1>
      <div className="flex flex-row gap-2">
        <Link to="/" className="text-white text-base font-medium">
          Home
        </Link>
        <span className="text-white text-base font-medium">
          <i className="ri-arrow-right-wide-line"></i>
        </span>
        <span className="text-white text-base font-medium">{title}</span>
      </div>
    </main>
  );
};
export default Commonbannersection;
