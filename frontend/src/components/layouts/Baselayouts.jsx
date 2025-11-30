import Navigationsection from "../Navigationsection";

const Baselayouts = ({ children }) => {
  return (
    <div className="lg:pt-48 pt-32">
      <Navigationsection />
      {children}
    </div>
  );
};

export default Baselayouts;
