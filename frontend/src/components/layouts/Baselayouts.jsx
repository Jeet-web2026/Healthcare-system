import Navigationsection from "../Navigationsection";
import Footer from "../partials/Footer";

const Baselayouts = ({ children }) => {
  return (
    <div className="lg:pt-48 pt-32">
      <Navigationsection />
      {children}
      <Footer />
    </div>
  );
};

export default Baselayouts;
