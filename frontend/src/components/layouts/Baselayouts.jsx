import Navigationsection from "../Navigationsection";
import Footer from "../partials/Footer";

const Baselayouts = ({ children, baseClass }) => {
  return (
    <div className={`lg:pt-48 pt-32 ${baseClass}`}>
      <Navigationsection />
      {children}
      <Footer />
    </div>
  );
};

export default Baselayouts;
