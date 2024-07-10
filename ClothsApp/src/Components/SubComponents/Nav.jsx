import React from "react";
import { ArrowDown, Bell, Like } from "../../../util/logo";

const Nav = () => {
  return (
    <>
      <div className="xl:w-[100%] xl:max-w-[1200px] xl:h-[84px] xl:flex xl:pb-5 xl:pt-5 xl:pl-[80px] xl:pr-[70px] xl:justify-between lg:min-w-[800px] lg:w-full lg:pl-[50px] lg:pr-[50px] lg:flex lg:justify-between lg:items-center lg:p-[20px] ">
        <div className="flex">
          <input
            className=" xl:max-w-[350px] border border-transparent rounded-md xl:pl-3 lg:p-[5px] lg:pl-3"
            placeholder="Search Everything"
          />
        </div>
        <div className="">
          <ul className="text-[#808191] xl:w-[100%] xl:max-w-[ 250px] xl:h-[44px] flex justify-between items-center xl:gap-[40px] lg:gap-[20px]">
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Blogs</li>
            <li className="cursor-pointer">Contact Us</li>
          </ul>
        </div>
        <div className="flex justify-between items-center xl:gap-[50px] lg:gap-[20px]">
          <Like className="cursor-pointer" />
          <Bell className="cursor-pointer" />
          <div className="flex items-center">
            <img
              className="cursor-pointer"
              src="/src/assets/Images/Avatars/Leslie.png"
            />
            <ArrowDown className="cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
