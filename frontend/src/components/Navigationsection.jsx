import { useEffect, useState } from "react";
import Header from "./partials/Header";
import Navbar from "./partials/Navbar";

const Navigationsection = () => {
  const [hideHeader, setHideHeader] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll && currentScroll > 50) {
        setHideHeader(true);
      } else {
        setHideHeader(false);
      }
      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <div
      className={`fixed top-0 w-full z-80 container mx-auto rounded-b-xl transition-all duration-300 ${
        hideHeader ? "-translate-y-15" : "translate-y-0"
      } `}
    >
      <Header
        animatedClass={`transition-all duration-300 ${
          hideHeader ? "-translate-y-full" : "translate-y-0"
        }`}
      />
      <Navbar />
    </div>
  );
};

export default Navigationsection;
