import Image_1 from "../../../assets/images/who-we-are-1.jpg";
import Image_2 from "../../../assets/images/who-we-are-2.jpg";
import Button from "../Button";

const Homeservicesintro = () => {
  return (
    <section className="flex flex-col lg:flex-row p-5 py-8 gap-5 items-center">
      <div className="flex flex-col gap-5 lg:w-1/2">
        <p className="capitalize text-blue-900 font-semibold">
          caring for you starts with who we are
        </p>
        <h3 className="lg:text-4xl text-3xl font-semibold">
          Investing in Your Health, Investing in Your Future
        </h3>
        <p className="text-gray-600">
          At Mediverse, we see beyond symptoms. Every experience is shaped by
          empathy, professionalism, and a dedication to delivering the highest
          standard of care for every patient we serve.
        </p>
        <div className="flex lg:flex-row flex-col lg:gap-8 gap-2 lg:mt-6">
          <ul className="text-md font-medium gap-1.5 flex flex-col">
            <li>
              <i className="ri-check-double-line text-green-600 me-2 text-2xl"></i>
              Emergency Medical Team
            </li>
            <li>
              <i className="ri-check-double-line text-green-600 me-2 text-2xl"></i>
              Skilled Healthcare Provider
            </li>
            <li>
              <i className="ri-check-double-line text-green-600 me-2 text-2xl"></i>
              Expert Medical Help
            </li>
          </ul>
          <ul className="text-md font-medium gap-1.5 flex flex-col">
            <li>
              <i className="ri-check-double-line text-green-600 me-2 text-2xl"></i>
              Emergency Medical Team
            </li>
            <li>
              <i className="ri-check-double-line text-green-600 me-2 text-2xl"></i>
              Skilled Healthcare Provider
            </li>
            <li>
              <i className="ri-check-double-line text-green-600 me-2 text-2xl"></i>
              Expert Medical Help
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-3 lg:w-1/2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <img
            src={Image_2}
            alt="who-we-are-image-1"
            className="lg:h-120 object-cover w-full rounded-2xl shadow-sm"
          />
          <div className="flex flex-col gap-5">
            <img
              src={Image_1}
              alt="who-we-are-image-1"
              className="lg:h-70 object-cover w-full rounded-2xl shadow-sm"
            />
            <p className="font-medium">
              Our experienced professionals are here to provide care that’s not
              only expert but also truly personalized and empathetic.
            </p>
            <Button
              text={`Read more`}
              icon={<i className="ri-arrow-right-long-line"></i>}
              transform={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homeservicesintro;
