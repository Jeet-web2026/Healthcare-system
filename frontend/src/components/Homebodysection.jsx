import Homeappointmentpart from "./partials/homeparts/Homeappointmentpart";
import Homefeaturesparts from "./partials/homeparts/Homefeaturesparts";
import Homeintroparts from "./partials/homeparts/Homeintroparts";
import Homemainparts from "./partials/homeparts/Homemainparts";
import Homemissionpart from "./partials/homeparts/Homemissionpart";
import Homeservicesintro from "./partials/homeparts/Homeservicesintro";
import Homestratagy from "./partials/homeparts/Homestratagy";

const Homebodysection = () => {
  return (
    <>
      <Homemainparts />
      <Homeintroparts />
      <Homeservicesintro />
      <Homemissionpart />
      <Homestratagy />
      <Homefeaturesparts />
      <Homeappointmentpart />
    </>
  );
};

export default Homebodysection;
