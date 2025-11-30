import { Link } from "react-router-dom";
import Slider from "react-slick";

const Slick = ({ baseclass, dots, show, scroll, carddata, cardclass, autoplay }) => {
  const settings = {
    dots: dots === "true",
    infinite: true,
    speed: 500,
    slidesToShow: Number(show),
    slidesToScroll: Number(scroll),
    arrows: false,
    autoplay: autoplay,
  };

  return (
    <div className={baseclass}>
      <Slider {...settings}>
        {carddata.map((item) => (
          <div className="pr-5">
            <Link to={"/department/" + item.id}>
              <div key={item.id} className={cardclass}>
                <span className="text-4xl">{item.icon}</span>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slick;
