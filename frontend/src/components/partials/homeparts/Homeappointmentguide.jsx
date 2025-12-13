import Image_2 from "../../../assets/images/who-we-are-2.jpg";
import Button from "../Button";
const Homeappointmentguide = () => {
  return (
    <section className="lg:py-10">
      <div
        className="bg-cover text-white bg-center bg-no-repeat min-h-[400px] relative px-5 lg:py-0 py-5 w-full lg:rounded-xl overflow-hidden flex items-center"
        style={{ backgroundImage: `url(${Image_2})` }}
      >
        <div className="absolute inset-0 bg-[#0000006b]"></div>
        <div className="relative z-20 lg:w-1/2 w-full flex flex-col gap-3">
          <h4 className="font-medium text-xl">Make an Appointment</h4>
          <h2 className="lg:text-4xl text-3xl font-semibold">
            Looking for professionals & trusted medical healthcare? you’re in
            the right place.
          </h2>
          <div className="lg:flex lg:flex-row flex-col items-center gap-8 my-5">
            <div className="flex items-center gap-2">
              <i className="ri-check-line text-cyan-300 text-2xl font-medium"></i>
              <p className="text-base">Innovative Healthcare Technology</p>
            </div>
            <div className="flex items-center gap-2">
              <i className="ri-check-line text-cyan-300 text-2xl font-medium"></i>
              <p className="text-base">Focused Medical Services</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button
              text="Call : +91 9163715179"
              icon={<i className="ri-phone-line"></i>}
              textclass={`lg:block hidden`}
              iconclass={`rounded-r-4xl lg:rounded-r-none`}
            />
            <Button
              text="Appointment"
              icon={<i className="ri-arrow-right-long-line"></i>}
              transform={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homeappointmentguide;
