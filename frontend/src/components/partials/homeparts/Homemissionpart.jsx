import { Link } from "react-router-dom";
import Slick from "../Slick";

const Homemissionpart = () => {
  const SlickData = [
    {
      id: 1,
      icon: <i className="ri-stethoscope-line"></i>,
      title: "Radiology",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem deserunt consectetur amet asperiores harum illo dicta voluptatum cumque eveniet soluta consequuntur repellat, maxime nihil fugiat.",
    },
    {
      id: 2,
      icon: <i className="ri-stethoscope-line"></i>,
      title: "Radiology",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem deserunt consectetur amet asperiores harum illo dicta voluptatum cumque eveniet soluta consequuntur repellat, maxime nihil fugiat.",
    },
    {
      id: 3,
      icon: <i className="ri-stethoscope-line"></i>,
      title: "Radiology",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem deserunt consectetur amet asperiores harum illo dicta voluptatum cumque eveniet soluta consequuntur repellat, maxime nihil fugiat.",
    },
    {
      id: 4,
      icon: <i className="ri-stethoscope-line"></i>,
      title: "Radiology",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem deserunt consectetur amet asperiores harum illo dicta voluptatum cumque eveniet soluta consequuntur repellat, maxime nihil fugiat.",
    },
  ];
  return (
    <section className="bg-blue-900 py-14 px-5 lg:rounded-2xl">
      <div className="flex items-center lg:flex-row flex-col gap-6 lg:gap-0">
        <div className="flex flex-col lg:gap-3 gap-3.5 lg:w-2/3 w-full">
          <p className="text-white font-medium">
            We’ll Help you Manage a Range of Conditions
          </p>
          <h3 className="lg:text-4xl text-3xl text-white font-medium">
            We Cover A Big Variety Of Medical Services
          </h3>
          <p className="text-gray-200">
            Stay updated with the latest news from MediCross, along with
            important medical developments and healthcare trends from around the
            world. Nam porttitor ullamcorper lorem, ut venenatis lacus semper
            at.
          </p>
        </div>
        <div className="lg:w-1/3 w-full flex lg:flex-row flex-col gap-3 items-center">
          <Link
            to={"/read-more/6"}
            className="flex flex-row gap-1 items-center lg:block hidden w-1/2"
          >
            <span className="border border-white lg:px-8 py-4 rounded-l-4xl text-white">
              Read more
            </span>
            <span className="bg-cyan-400 px-4 py-4 border border-cyan-400 rounded-r-4xl text-white">
              <i className="ri-arrow-right-long-line"></i>
            </span>
          </Link>
          <Link
            to={"/read-more/6"}
            className="bg-transparent border border-white rounded-4xl text-white px-8 lg:py-4 py-4 lg:hidden w-full"
          >
            <span className="flex justify-center items-center">
              Read more
              <i className="ri-arrow-right-long-line ml-5"></i>
            </span>
          </Link>
          <Link
            to={"/make-appointment"}
            className="bg-white rounded-4xl text-blue-800 px-8 lg:py-4 py-4 lg:w-1/2 w-full"
          >
            <span className="flex justify-center items-center">
              Appointment
              <i className="ri-arrow-right-long-line ml-5"></i>
            </span>
          </Link>
        </div>
      </div>
      <Slick
        baseclass="mt-8 grid grid-cols-1"
        dots={false}
        scroll={1}
        show={3}
        cardclass={`bg-blue-800 p-5 rounded-xl shadow-sm border border-blue-700 text-white flex flex-col gap-5`}
        carddata={SlickData}
        autoplay={true}
      />
    </section>
  );
};

export default Homemissionpart;
