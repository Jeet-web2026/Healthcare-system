import pilimage from "../../../assets/images/pill.png";
import doctorsign from "../../../assets/images/main-d-img.png";

const Homestratagy = () => {
  return (
    <section className="py-8 px-6">
      <div className="flex flex-col gap-3">
        <h5 className="text-center text-blue-900 font-medium">
          Trusted Source for Health Insights
        </h5>
        <h2 className="capitalize text-center lg:text-4xl text-3xl font-semibold">
          why choose mediverse Health care cen ter?
        </h2>
        <p className="mx-auto text-center text-gray-500 lg:w-220">
          Read the latest news about medicross as well as medical news around
          the world. Nam porttitor ullamcorper. Ut venenatis lacus eget nisi
          sodales, eget suscipit quam.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-10">
        <div className="flex flex-col lg:gap-14 gap-7 order-1 lg:order-1">
          <div className="flex flex-row gap-3 lg:gap-8">
            <div className="flex flex-col gap-2">
              <h3 className="capitalize font-bold text-xl text-end">
                care coordination
              </h3>
              <p className="text-end text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit,
                veniam natus aspernatur saepe facilis optio.
              </p>
            </div>
            <img
              src={pilimage}
              alt="care coordination"
              className="w-auto h-16 bg-blue-300 rounded-[50%] px-1.5 py-3 border border-5 border-blue-200"
            />
          </div>
          <div className="flex lg:flex-row gap-3 lg:gap-8 flex-row-reverse">
            <div className="flex flex-col gap-2">
              <h3 className="capitalize font-bold text-xl lg:text-end text-start">
                care coordination
              </h3>
              <p className="lg:text-end text-start text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit,
                veniam natus aspernatur saepe facilis optio.
              </p>
            </div>
            <img
              src={pilimage}
              alt="care coordination"
              className="w-auto h-16 bg-blue-300 rounded-[50%] px-1.5 py-3 border border-5 border-blue-200"
            />
          </div>
          <div className="flex flex-row gap-3 lg:gap-8">
            <div className="flex flex-col gap-2">
              <h3 className="capitalize font-bold text-xl text-end">
                care coordination
              </h3>
              <p className="text-end text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit,
                veniam natus aspernatur saepe facilis optio.
              </p>
            </div>
            <img
              src={pilimage}
              alt="care coordination"
              className="w-auto h-16 bg-blue-300 rounded-[50%] px-1.5 py-3 border border-5 border-blue-200"
            />
          </div>
        </div>
        <div className="lg:flex justify-center items-center order-3 lg:order-2 lg:mt-0 mt-8 hidden">
          <div className="border border-blue-200 p-5 rounded-full">
            <div className="border border-14 border-blue-800 p-8 rounded-full relative">
              <div className="absolute border border-blue-500 rounded-full inset-7.5 z-10  flex justify-between [animation-duration:10s] animate-spin">
                <p className="text-blue-800 font-medium p-2 bg-blue-900 rounded-full h-2 mt-12 border border-4 border-blue-200"></p>
                <p className="text-blue-800 font-medium p-2 bg-blue-900 rounded-full h-2 -mt-3 border border-4 border-blue-200 ms-[30px]"></p>
                <p className="text-blue-800 font-medium p-2 bg-blue-900 rounded-full h-2 mt-[80px] me-[-10px] ms-4 border border-4 border-blue-200"></p>
                <p className="text-blue-800 font-medium p-2 bg-blue-900 ml-[-8px] mt-[3px] rounded-full h-2 top-48 left-40 right-1.5 w-2 absolute border border-4 border-blue-200"></p>
                <p className="text-blue-800 font-medium p-2 bg-blue-900 rounded-full h-2 bottom-[35px] left-[8px] right-5 w-2 absolute border border-4 border-blue-200"></p>
              </div>
              <div className="p-10 rounded-full relative z-20">
                <img
                  src={doctorsign}
                  alt="base_image"
                  className="h-35 w-auto bg-blue-300 rounded-[50%] p-5 border border-10 border-white shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:gap-14 gap-7 order-2 lg:order-3 lg:mt-0 mt-8">
          <div className="flex flex-row gap-3 lg:gap-8">
            <img
              src={pilimage}
              alt="care coordination"
              className="w-auto h-16 bg-blue-300 rounded-[50%] px-1.5 py-3 border border-5 border-blue-200"
            />
            <div className="flex flex-col gap-2">
              <h3 className="capitalize font-bold text-xl text-start">
                care coordination
              </h3>
              <p className="text-start text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit,
                veniam natus aspernatur saepe facilis optio.
              </p>
            </div>
          </div>
          <div className="flex lg:flex-row flex-row-reverse lg:gap-8 gap-3">
            <img
              src={pilimage}
              alt="care coordination"
              className="w-auto h-16 bg-blue-300 rounded-[50%] px-1.5 py-3 border border-5 border-blue-200"
            />
            <div className="flex flex-col gap-2">
              <h3 className="capitalize font-bold text-xl lg:text-start text-end">
                care coordination
              </h3>
              <p className="lg:text-start text-end text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit,
                veniam natus aspernatur saepe facilis optio.
              </p>
            </div>
          </div>
          <div className="flex flex-row lg:gap-8 gap-3">
            <img
              src={pilimage}
              alt="care coordination"
              className="w-auto h-16 bg-blue-300 rounded-[50%] px-1.5 py-3 border border-5 border-blue-200"
            />
            <div className="flex flex-col gap-2">
              <h3 className="capitalize font-bold text-xl text-start">
                care coordination
              </h3>
              <p className="text-start text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit,
                veniam natus aspernatur saepe facilis optio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homestratagy;
