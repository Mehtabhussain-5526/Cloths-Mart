import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../../node_modules/swiper/swiper.css";
import yellowvertical from "../../assets/Images/Banners/yellow-vertical-home.png";
import ideasvertical from "../../assets/Images/Banners/ideas-vertical-home.png";
import ideasgreenvertical from "../../assets/Images/Banners/ideas-green-vertical-home.png";

const RecommendationMb = () => {
  const banners = [
    { url: ideasvertical },
    { url: yellowvertical },
    { url: ideasvertical },
    { url: ideasgreenvertical },
    { url: yellowvertical },
    { url: ideasgreenvertical },
    { url: ideasvertical },
    { url: yellowvertical },
  ];

  return (
        <Swiper spaceBetween={14} slidesPerView={2.7} 
    >
      {banners.map((data, index) => (
        <SwiperSlide className="mb:max-w-[120px]">
          <img className="rounded-2xl" src={data.url} alt="image not found" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default RecommendationMb;
