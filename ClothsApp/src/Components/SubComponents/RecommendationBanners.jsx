import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../../node_modules/swiper/swiper.css";
import ideasbannergreen from "../../assets/Images/Banners/ideas-banner-green.png";
import ideasbannerpurple from "../../assets/Images/Banners/ideas-banner-purple.png";

const RecommendationBanners = () => {
  const banners = [
    { url: ideasbannerpurple },
    { url: ideasbannergreen },
    { url: ideasbannerpurple },
    { url: ideasbannergreen },
    { url: ideasbannerpurple },
    { url: ideasbannergreen },
    { url: ideasbannerpurple },
    { url: ideasbannergreen },
  ];
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={2.2}
    >
      
        {banners.map((data, index) => (
            <SwiperSlide>
          <img
            className=" rounded-2xl"
            src={data.url}
            alt="image not found"
          />
          </SwiperSlide>
        ))}
      
    </Swiper>
  );
};

export default RecommendationBanners;
