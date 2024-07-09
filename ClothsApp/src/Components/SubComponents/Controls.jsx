import React from "react";
import {
  BrandsIcon,
  MarketIcon,
  NewsIcon,
  PeopleIcon,
} from "../../../util/logo";
import { Link } from "react-router-dom";

const Controls = () => {
  return (
    <>
      <p className="text-[#808191] mt-[30px] mb-[30px] font-normal  text-[11px] leading-5 lg:ml-[20px] lg:max-w-fit">
        News Feed
      </p>
      <Link to="/marketplacechat">
        {" "}
        <div className="flex pl-[10px] h-[46px] text-[#808191] items-center border border-transparent rounded-lg hover:text-white hover:bg-[#6151FF] mb-[15px] lg:max-w-[180px] lg:w-[100%] lg:ml-[20px]">
          <NewsIcon />
          <p className=" ml-[10px]">News Feed</p>
        </div>
      </Link>
      <Link to="/">
        <div className="flex pl-[10px] h-[46px] text-[#808191] items-center border border-transparent rounded-lg hover:text-white hover:bg-[#6151FF] mb-[15px] lg:max-w-[180px] lg:w-[100%] lg:ml-[20px]">
          <MarketIcon />
          <p className=" ml-[10px]"> Market Place </p>
        </div>
      </Link>
      <Link to="/brands">
        <div className="flex pl-[10px] h-[46px] text-[#808191] items-center border border-transparent rounded-lg hover:text-white hover:bg-[#6151FF] mb-[15px] lg:max-w-[180px] lg:w-[100%] lg:ml-[20px]">
          <BrandsIcon />
          <p className=" ml-[10px]">Brands</p>
        </div>
      </Link>
      <Link to="/pinneditems">
        <div className="flex pl-[10px] h-[46px] text-[#808191] items-center border border-transparent rounded-lg hover:text-white hover:bg-[#6151FF] mb-[15px] lg:max-w-[180px] lg:w-[100%] lg:ml-[20px]">
          <PeopleIcon />
          <p className=" ml-[10px]">People</p>
        </div>
      </Link>
    </>
  );
};

export default Controls;
