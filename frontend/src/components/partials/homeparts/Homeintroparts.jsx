const Homeintroparts = () => {
  return (
    <section className="bg-blue-900 px-5 py-14 lg:rounded-2xl lg:mt-4 text-white flex flex-col gap-10">
      <div className="gap-8 lg:gap-0 flex flex-col lg:flex-row lg:mb-5">
        <div className="lg:w-1/2 w-full">
          <h3 className="capitalize text-4xl font-medium">
            our only priority is to keep you healthy
          </h3>
        </div>
        <div className="lg:w-1/2 w-full">
          <p>
            Stay updated with the latest news from MediCross, along with
            important medical developments and healthcare trends from around the
            world. Nam porttitor ullamcorper lorem.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="flex lg:flex-row flex-col lg:gap-0 gap-3">
          <span className="lg:bg-white lg:py-5 py-2 lg:px-5 rounded-xl w-fit lg:block flex gap-3 lg:gap-0">
            <i className="ri-hospital-line lg:text-5xl text-3xl lg:text-blue-900"></i>
            <h2 className="lg:text-5xl text-3xl text-cyan-400 font-semibold lg:hidden block">
              15+
            </h2>
          </span>
          <div className="lg:ml-5">
            <h2 className="lg:text-5xl text-3xl text-cyan-400 font-semibold hidden lg:block">
              15+
            </h2>
            <p className="capitalize">centres accross all over India</p>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col lg:gap-0 gap-3">
          <span className="lg:bg-white lg:py-5 py-2 lg:px-5 rounded-xl w-fit lg:block flex gap-3 lg:gap-0">
            <i className="ri-honour-line lg:text-5xl text-3xl lg:text-blue-900"></i>
            <h2 className="lg:text-5xl text-3xl text-cyan-400 font-semibold lg:hidden block">
              13+
            </h2>
          </span>
          <div className="lg:ml-5">
            <h2 className="lg:text-5xl text-3xl text-cyan-400 font-semibold hidden lg:block">
              13+
            </h2>
            <p className="capitalize">
              hononary award for best quality hospital
            </p>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col lg:gap-0 gap-3">
          <span className="lg:bg-white lg:py-5 py-2 lg:px-5 rounded-xl w-fit lg:block flex gap-3 lg:gap-0">
            <i className="ri-calendar-line lg:text-5xl text-3xl lg:text-blue-900"></i>
            <h2 className="lg:text-5xl text-3xl text-cyan-400 font-semibold lg:hidden block">
              10+
            </h2>
          </span>
          <div className="lg:ml-5">
            <h2 className="lg:text-5xl text-3xl text-cyan-400 font-semibold hidden lg:block">
              10+
            </h2>
            <p className="capitalize">years of working experience</p>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col lg:gap-0 gap-3">
          <span className="lg:bg-white lg:py-5 py-2 lg:px-5 rounded-xl w-fit lg:block flex gap-3 lg:gap-0">
            <i className="ri-group-line lg:text-5xl text-3xl lg:text-blue-900"></i>
            <h2 className="lg:text-5xl text-3xl text-cyan-400 font-semibold lg:hidden block">
              3560+
            </h2>
          </span>
          <div className="lg:ml-5">
            <h2 className="lg:text-5xl text-3xl text-cyan-400 font-semibold hidden lg:block">
              3560+
            </h2>
            <p className="capitalize">happy clients all over the world</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homeintroparts;
