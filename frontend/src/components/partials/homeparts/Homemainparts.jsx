import backgroundImage from "../../../assets/images/main-bg.jpg";

const Homemainparts = () => {
  return (
    <main
      className={"lg:h-[500px] h-[600px] w-full bg-cover bg-center bg-no-repeat md:bg-top lg:bg-top"}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    ></main>
  );
};

export default Homemainparts;
