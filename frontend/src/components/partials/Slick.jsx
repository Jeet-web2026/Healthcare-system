import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Slick({
  baseclass,
  dots,
  show,
  carddata,
  cardclass,
  autoplay,
}) {
  return (
    <div className={baseclass}>
      <Swiper
        spaceBetween={20}
        slidesPerView={Number(show)}
        pagination={dots === "true" ? { clickable: true } : false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          1536: { slidesPerView: Number(show) },
          1280: { slidesPerView: Math.min(Number(show), 4) },
          1024: { slidesPerView: Math.min(Number(show), 3) },
          768: { slidesPerView: 2 },
          480: { slidesPerView: 1 },
          0: { slidesPerView: 1 },
        }}
      >
        {carddata.map((item) => (
          <SwiperSlide key={item.id}>
            <div className={cardclass}>
              <span className="text-4xl">{item.icon}</span>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
