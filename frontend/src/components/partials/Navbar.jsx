import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar bg-blue-900 lg:rounded-xl lg:p-5 p-4">
      <div className="navbar-start">
        <div className="dropdown me-3">
          <div tabIndex={0} role="button" className="lg:hidden text-lg">
            <i className="ri-menu-2-line text-white"></i>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-50 p-2 shadow mt-6"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <p className="text-blue-900">Pages</p>
              <ul className="p-2">
                <li>
                  <Link
                    to={"/about-us"}
                    className="font-medium text-blue-900"
                  >
                    <span className="border rounded border-blue-500 bg-blue-50 px-1 text-blue-500 fone-normal">
                      <i className="ri-info-i"></i>
                    </span>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/services"}
                    className="font-medium text-blue-900"
                  >
                    <span className="border rounded border-blue-500 bg-blue-50 px-1 text-blue-500 fone-normal">
                      <i className="ri-service-line"></i>
                    </span>
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/branches"}
                    className="font-medium text-blue-900"
                  >
                    <span className="border rounded border-blue-500 bg-blue-50 px-1 text-blue-500 fone-normal">
                      <i className="ri-home-smile-2-line"></i>
                    </span>
                    Our branches
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <NavLink
          to={"/"}
          className={"lg:text-2xl text-lg flex gap-2 text-white items-center"}
        >
          <i className="ri-dna-line lg:text-3xl font-normal"></i>
          <h2 className="font-semibold">Happy Health</h2>
        </NavLink>
      </div>
      <div className="navbar-center lg:flex gap-2">
        <ul className="menu menu-horizontal hidden lg:flex px-1">
          <li>
            <Link
              className="text-base uppercase text-white font-semibold"
              to={"/"}
            >
              Home
            </Link>
          </li>
          <li>
            <details>
              <summary className="text-base uppercase text-white font-semibold">
                Pages
              </summary>
              <ul className="p-2  w-60 z-1 mt-7">
                <li>
                  <Link
                    to={"/about-us"}
                    className="text-base font-medium text-blue-900"
                  >
                    <span className="border rounded border-blue-500 bg-blue-50 px-1 text-blue-500 text-sm fone-normal">
                      <i className="ri-info-i"></i>
                    </span>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/services"}
                    className="text-base font-medium text-blue-900"
                  >
                    <span className="border rounded border-blue-500 bg-blue-50 px-1 text-blue-500 text-sm fone-normal">
                      <i className="ri-service-line"></i>
                    </span>
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/branches"}
                    className="text-base font-medium text-blue-900"
                  >
                    <span className="border rounded border-blue-500 bg-blue-50 px-1 text-blue-500 text-sm fone-normal">
                      <i className="ri-home-smile-2-line"></i>
                    </span>
                    Our branches
                  </Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary className="text-base uppercase text-white font-semibold">
                Services
              </summary>
              <ul className="p-2  w-70 z-1 mt-7">
                <li>
                  <Link
                    to={"/services/health-checkup"}
                    className="text-base font-medium text-blue-900"
                  >
                    <span className="border rounded border-blue-500 bg-blue-50 px-1 text-blue-500 text-sm fone-normal">
                      <i className="ri-stethoscope-line"></i>
                    </span>
                    Health Checkup
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/services/diagnostic-services"}
                    className="text-base font-medium text-blue-900"
                  >
                    <span className="border rounded border-blue-500 bg-blue-50 px-1 text-blue-500 text-sm fone-normal">
                      <i className="ri-dossier-line"></i>
                    </span>
                    Diagnostic Services
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/services/pharmacy-medication"}
                    className="text-base font-medium text-blue-900"
                  >
                    <span className="border rounded border-blue-500 bg-blue-50 px-1 text-blue-500 text-sm fone-normal">
                      <i className="ri-surgical-mask-line"></i>
                    </span>
                    Pharmacy & Medication
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/services/pharmacy-medication"}
                    className="text-base font-medium text-blue-900"
                  >
                    <span className="border rounded border-blue-500 bg-blue-50 px-1 text-blue-500 text-sm fone-normal">
                      <i className="ri-aed-line"></i>
                    </span>
                    Emergency & Support
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/services/pharmacy-medication"}
                    className="text-base font-medium text-blue-900"
                  >
                    <span className="border rounded border-blue-500 bg-blue-50 px-1 text-blue-500 text-sm fone-normal">
                      <i className="ri-empathize-line"></i>
                    </span>
                    Wellness & Preventive Care
                  </Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary className="text-base uppercase text-white font-semibold">
                Case Studies
              </summary>
              <ul className="p-2  w-70 z-1 mt-7">
                <li>
                  <Link
                    to={"/case-studies/patient-care-improvements"}
                    className="text-base font-medium text-blue-900"
                  >
                    <span className="border rounded border-blue-500 bg-blue-50 px-1 text-blue-500 text-sm fone-normal">
                      <i className="ri-sparkling-line"></i>
                    </span>
                    Patient Care Improvements
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/services/diagnostic-services"}
                    className="text-base font-medium text-blue-900"
                  >
                    <span className="border rounded border-blue-500 bg-blue-50 px-1 text-blue-500 text-sm fone-normal">
                      <i className="ri-dv-line"></i>
                    </span>
                    Digital Healthcare Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/services/diagnostic-services"}
                    className="text-base font-medium text-blue-900"
                  >
                    <span className="border rounded border-blue-500 bg-blue-50 px-1 text-blue-500 text-sm fone-normal">
                      <i className="ri-hospital-line"></i>
                    </span>
                    Hospital Management
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/services/diagnostic-services"}
                    className="text-base font-medium text-blue-900"
                  >
                    <span className="border rounded border-blue-500 bg-blue-50 px-1 text-blue-500 text-sm fone-normal">
                      <i className="ri-ai-generate-2"></i>
                    </span>
                    AI & Innovation
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/services/diagnostic-services"}
                    className="text-base font-medium text-blue-900"
                  >
                    <span className="border rounded border-blue-500 bg-blue-50 px-1 text-blue-500 text-sm fone-normal">
                      <i className="ri-bar-chart-grouped-line"></i>
                    </span>
                    Success Stories
                  </Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary className="text-base uppercase text-white font-semibold">
                Blogs
              </summary>
              <ul className="p-2 mt-7 w-70 z-1">
                <li>
                  <Link
                    to={"/services/health-checkup"}
                    className="text-base font-medium text-blue-900"
                  >
                    <span className="border rounded border-blue-500 bg-blue-50 px-1 text-blue-500 text-sm fone-normal">
                      <i className="ri-news-line"></i>
                    </span>
                    Latest Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/services/health-checkup"}
                    className="text-base font-medium text-blue-900"
                  >
                    <span className="border rounded border-blue-500 bg-blue-50 px-1 text-blue-500 text-sm fone-normal">
                      <i className="ri-calendar-event-line"></i>
                    </span>
                    Upcoming Events
                  </Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end lg:gap-5 gap-2">
        <button className="border px-2.5 py-1.5 cursor-pointer text-white rounded-full">
          <i className="ri-search-2-line lg:text-xl"></i>
        </button>
        <Link
          to={"/make-appointment"}
          className="bg-white rounded-3xl text-blue-800 lg:px-7 lg:py-3 px-3 py-2 lg:ml-2"
        >
          <span className="flex hidden lg:block">
            Appointment
            <i className="ri-arrow-right-long-line ml-5"></i>
          </span>
          <span className="lg:hidden">
            <i className="ri-calendar-schedule-line"></i>
          </span>
        </Link>
        <button className="bg-red-700 text-white px-2 py-1 rounded-full cursor-pointer">
          <i className="ri-add-line lg:text-3xl text-2xl"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
