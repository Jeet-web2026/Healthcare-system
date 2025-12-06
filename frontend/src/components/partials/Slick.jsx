import { Link } from "react-router-dom";
import Slider from "react-slick";

const Slick = ({
  baseclass,
  dots,
  show,
  scroll,
  carddata,
  cardclass,
  autoplay,
}) => {
  const settings = {
    dots: dots === "true",
    infinite: true,
    speed: 500,
    slidesToShow: Number(show),
    slidesToScroll: Number(scroll),
    arrows: false,
    autoplay: autoplay,
    responsive: [
      {
        breakpoint: 1280, // Large devices
        settings: {
          slidesToShow: Math.min(Number(show), 3),
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // Tablet landscape
        settings: {
          slidesToShow: Math.min(Number(show), 3),
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Tablet portrait
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 480, // Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
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
