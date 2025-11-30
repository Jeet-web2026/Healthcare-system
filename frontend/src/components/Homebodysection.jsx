import Homeintroparts from "./partials/homeparts/Homeintroparts";
import Homemainparts from "./partials/homeparts/Homemainparts";
import Homemissionpart from "./partials/homeparts/Homemissionpart";
import Homeservicesintro from "./partials/homeparts/Homeservicesintro";

const Homebodysection = () => {
  return (
    <>
      <Homemainparts />
      <Homeintroparts />
      <Homeservicesintro />
      <Homemissionpart />
    </>
  );
};

export default Homebodysection;
