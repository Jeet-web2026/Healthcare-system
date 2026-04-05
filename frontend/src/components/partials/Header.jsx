import Swal from "sweetalert2";
import api from "../../api/axios";
import { useEffect, useState } from "react";
const Header = ({ animatedClass }) => {
  const [data, setData] = useState([]);
  const organisationDetails = async () => {
    try {
      const response = await api.get("/organisation-details");
      setData(response.data.data);
    } catch (error) {
      Swal.fire({
        title: "Something went wrong!",
        text: error.response?.data?.message,
        icon: "error",
        draggable: false,
      });
    }
  };

  useEffect(() => {
    organisationDetails();
  }, []);
  return (
    <>
      {data && (
        <div
          className={
            "lg:flex items-center py-4 lg:bg-transparent bg-blue-50 justify-between " +
            animatedClass
          }
        >
          <div className="lg:flex hidden items-center gap-5">
            <div className="flex items-center gap-2">
              <span className="bg-cyan-400 text-white px-2 py-1 rounded-full">
                <i className="ri-map-pin-line text-xl"></i>
              </span>
              <div>
                Location Address Details:
                <p>{data.primaryLocation}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-cyan-400 text-white px-2 py-1 rounded-full">
                <i className="ri-mail-open-line text-lg"></i>
              </span>
              <div>
                Support Email Address:
                <p>{data.primaryEmail}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-cyan-400 text-white px-2 py-1 rounded-full">
                <i className="ri-time-line text-xl"></i>
              </span>
              <div>
                Working Hours Details:
                <p>{data.availableTime}</p>
              </div>
            </div>
          </div>
          <div className="flex gap-4 text-cyan-400 text-lg items-center justify-between lg:px-0 px-4">
            <div className="flex gap-4 items-center">
              <p className="lg:hidden">Find us on :</p>
              {data?.socialmediainfo && (
                <>
                  <a href={data.socialmediainfo[0]}>
                    <i className="ri-linkedin-line font-bold"></i>
                  </a>
                  <span>|</span>

                  <a href={data.socialmediainfo[1]}>
                    <i className="ri-facebook-line font-bold"></i>
                  </a>
                  <span>|</span>

                  <a href={data.socialmediainfo[2]}>
                    <i className="ri-youtube-line font-bold"></i>
                  </a>
                  <span>|</span>

                  <a href={data.socialmediainfo[3]}>
                    <i className="ri-twitter-x-line font-bold"></i>
                  </a>
                </>
              )}
              <ul className="menu lg:menu-horizontal text-black lg:block hidden">
                <li>
                  <details>
                    <summary className="text-base">English</summary>
                    <ul>
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
            <div className="lg:hidden text-black text-xl font-bold">
              <button>
                <i className="ri-more-2-fill"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
