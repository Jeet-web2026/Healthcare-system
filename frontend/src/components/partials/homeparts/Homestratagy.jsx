import pilimage from "../../../assets/images/pill.png";

const Homestratagy = () => {
  return (
    <section className="py-8 px-5">
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
        <div className="flex flex-col gap-14">
          <div className="flex flex-row gap-8">
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
          <div className="flex flex-row gap-8">
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
          <div className="flex flex-row gap-8">
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
        <div className="flex justify-center items-center">
          <div className="border border-blue-200 p-5 rounded-full">
            <div className="border border-8 border-blue-800 p-5 rounded-full">
                <div className="border border-blue-300 p-5 rounded-full">
                    
                </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-14">
          <div className="flex flex-row gap-8">
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
          <div className="flex flex-row gap-8">
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
          <div className="flex flex-row gap-8">
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
