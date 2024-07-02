import React from "react";
import {
  BrandsIcon,
  MarketIcon,
  NewsIcon,
  PeopleIcon,
} from "../../../util/logo";

const Controls = () => {
  return (
    <>
      <p className="text-[#808191] mt-[30px] mb-[30px] font-normal  text-[11px] leading-5">News Feed</p>
      <div className="flex pl-[10px] h-[46px] text-[#808191] items-center border border-transparent rounded-lg hover:text-white hover:bg-[#6151FF]">
        <NewsIcon />
        <p className=" ml-[10px]">News Feed</p>
      </div>
      <div className="flex pl-[10px] h-[46px] text-[#808191] items-center border border-transparent rounded-lg hover:text-white hover:bg-[#6151FF]">
        <MarketIcon />
        <p className=" ml-[10px]">Market Place</p>
      </div>
      <div className="flex pl-[10px] h-[46px] text-[#808191] items-center border border-transparent rounded-lg hover:text-white hover:bg-[#6151FF]">
        <BrandsIcon  />
        <p className=" ml-[10px]">Brands</p>
      </div>
      <div className="flex pl-[10px] h-[46px] text-[#808191] items-center border border-transparent rounded-lg hover:text-white hover:bg-[#6151FF]">
        <PeopleIcon />
        <p className=" ml-[10px]">People</p>
      </div>
    </>
  );
};

export default Controls;
