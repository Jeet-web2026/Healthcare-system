import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-900 lg:rounded-t-lg pt-10">
      <div className="lg:px-8 px-4 grid grid-cols-1 lg:grid-cols-2 lg:gap-10 gap-8">
        <div>
          <NavLink
            to={"/"}
            className={"lg:text-2xl text-lg flex gap-2 text-white items-center"}
          >
            <i className="ri-dna-line lg:text-3xl font-normal"></i>
            <h2 className="font-semibold">Happy Health</h2>
          </NavLink>
          <p className="mt-5 text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
            officia, inventore doloremque ad aliquam animi itaque iure accusamus
            sed sint, quasi velit dignissimos? Exercitationem, nam? Quas soluta
            est ipsam eligendi. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Accusantium, atque?
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-2 lg:gap-10">
          <div className="flex flex-col gap-4">
            <h4 className="text-white text-xl">Quick links</h4>
            <ul className="text-white text-base flex flex-col gap-1">
              <Link to="/our-branches">
                <li>
                  <i className="ri-home-wifi-line me-2"></i>Our branches
                </li>
              </Link>
              <Link to="/our-doctors">
                <li>
                  <i className="ri-stethoscope-line me-2"></i>Our doctors
                </li>
              </Link>
              <Link to="/holidays">
                <li>
                  <i className="ri-calendar-close-line me-2"></i>Holidays
                </li>
              </Link>
              <Link to="/careers">
                <li>
                  <i className="ri-briefcase-5-fill me-2"></i>Careers
                </li>
              </Link>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-white text-xl">Other links</h4>
            <ul className="text-white text-base flex flex-col gap-1">
              <Link to="/rate-us">
                <li>
                  <i className="ri-star-smile-line me-2"></i>Rate us
                </li>
              </Link>
              <Link to="/refer-to-a-friend">
                <li>
                  <i className="ri-user-shared-line me-2"></i>Refer to a friend
                </li>
              </Link>
              <Link to="/seminars">
                <li>
                  <i className="ri-home-9-line me-2"></i>Seminars
                </li>
              </Link>
              <Link to="/blogs">
                <li>
                  <i className="ri-news-line me-2"></i>Latest updates
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t-2 border-blue-700 text-center text-white mx-4 lg:mx-8 flex flex-col lg:flex-row items-center justify-between pb-10 pt-5 mt-8 gap-4">
        <p>
          Copyright <i className="ri-copyright-line"></i>{" "}
          {new Date().getFullYear()} Happy Health. All rights reserved.
        </p>
        <div className="flex flex-row gap-2.5 text-lg">
          <a href="">
            <i className="ri-linkedin-line"></i>
          </a>
          <a href="">
            <i className="ri-facebook-line"></i>
          </a>
          <a href="">
            <i className="ri-instagram-line"></i>
          </a>
          <a href="">
            <i className="ri-threads-line"></i>
          </a>
          <a href="">
            <i className="ri-youtube-line"></i>
          </a>
        </div>
        <div className="flex flex-row gap-2">
          <Link to={"/terms-and-conditions"}>Tems & conditions</Link>
          <p>|</p>
          <Link to={"/privacy-policy"}>Privacy policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
