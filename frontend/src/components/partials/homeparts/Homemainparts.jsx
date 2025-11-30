import { Link } from "react-router-dom";
import backgroundImage from "../../../assets/images/main-bg.jpg";
import Button from "../Button";

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
          <Button
            text="Call Us Today: +91 9163715179"
            icon={<i className="ri-phone-line"></i>}
            textclass={`lg:block hidden`}
            iconclass={`rounded-r-4xl lg:rounded-r-none`}
          />
          <Button
            text="Appointment"
            icon={<i className="ri-calendar-schedule-line"></i>}
          />
        </div>
      </div>
      <div className="lg:w-1/3 w-full"></div>
    </main>
  );
};

export default Homemainparts;
