import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/base-logo.png";

const Navbar = () => {
  return (
    <div className="navbar bg-blue-900 lg:rounded-xl lg:p-5 p-4">
      <div className="navbar-start">
        <div className="dropdown me-3">
          <div tabIndex={0} role="button" className="lg:hidden text-lg">
            <i className="ri-menu-2-line text-white"></i>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
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
            <a className="text-base uppercase text-white font-semibold">Home</a>
          </li>
          <li>
            <details>
              <summary className="text-base uppercase text-white font-semibold">
                Pages
              </summary>
              <ul className="p-2  w-40 z-1">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary className="text-base uppercase text-white font-semibold">
                Services
              </summary>
              <ul className="p-2  w-40 z-1">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary className="text-base uppercase text-white font-semibold">
                Case Studies
              </summary>
              <ul className="p-2  w-40 z-1">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary className="text-base uppercase text-white font-semibold">
                Blogs
              </summary>
              <ul className="p-2  w-40 z-1">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
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
          to={"/get-started"}
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
    </div>
  );
};

export default Navbar;
