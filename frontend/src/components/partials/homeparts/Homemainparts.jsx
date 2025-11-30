import { Link } from "react-router-dom";
import backgroundImage from "../../../assets/images/main-bg.jpg";

const Homemainparts = () => {
  return (
    <main
      className={
        "lg:h-[500px] h-[600px] w-full bg-cover bg-center bg-no-repeat md:bg-top lg:bg-top flex lg:flex-row flex-col justify-center items-center lg:p-8 p-5 relative lg:rounded-2xl overflow-hidden"
      }
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-[#00000063]"></div>
      <div className="lg:w-2/3 w-full z-10 relative gap-8 flex flex-col">
        <div className="border-b pb-5 border-gray-400 flex flex-col gap-3">
          <p className="text-cyan-200 font-medium text-2xl">
            Happy Health Medicare
          </p>
          <h2 className="capitalize lg:text-7xl text-4xl font-medium text-white">
            advanced medicine.
          </h2>
          <h2 className="capitalize lg:text-7xl text-4xl font-medium text-white">
            compassionate care.
          </h2>
        </div>
        <div>
          <p className="text-gray-200">
            The healthcare sector needed to upgrade processes and build
            well-supported institution. This aimed to enhance efficiency and
            meet growing demands.
          </p>
        </div>
        <div className="flex flex-row items-center gap-3">
          <button className="bg-cyan-500 text-white px-8 cursor-pointer py-3 rounded-md flex items-center">
            <i className="ri-phone-line lg:me-2 text-2xl"></i> <span className="hidden lg:block">Call Us Today: +91
            9163715179</span>
          </button>
          <Link
            to="/make-appointment"
            className="bg-cyan-500 px-5 py-3 rounded-md text-white flex items-center"
          >
            <i className="ri-calendar-schedule-line text-2xl mr-2"></i>Appointment
          </Link>
        </div>
      </div>
      <div className="lg:w-1/3 w-full"></div>
    </main>
  );
};

export default Homemainparts;
