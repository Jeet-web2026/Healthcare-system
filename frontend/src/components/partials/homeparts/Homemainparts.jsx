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
      <div className="lg:w-2/3 w-full flex flex-col gap-3 z-10 relative">
        <p className="text-cyan-200 font-medium text-2xl">
          Happy Health Medicare
        </p>
        <h2 className="capitalize lg:text-7xl text-4xl font-medium text-white">advanced medicine.</h2>
        <h2 className="capitalize lg:text-7xl text-4xl font-medium text-white">compassionate care.</h2>
      </div>
      <div className="lg:w-1/3 w-full"></div>
    </main>
  );
};

export default Homemainparts;
