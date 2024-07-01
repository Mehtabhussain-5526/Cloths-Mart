import React from "react";
import { ArrowDown, Bell, Like } from "../../../util/logo";

const Nav = () => {
  return (
    <>
      <div className=" w-[100%] max-w-[1200px] h-[84px] flex pb-5 pt-5 pl-[84px] pr-[70px] justify-between">
        <div className="flex">
          <input
            className="max-w-[400px] w-[100%] border border-transparent rounded-md pl-3"
            placeholder="Search Everything"
          />
        </div>
        <div className="">
          <ul className="w-[100%] max-w-[ 250px] h-[44px] flex justify-between items-center gap-[40px] ">
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Blogs</li>
            <li className="cursor-pointer">Contact Us</li>
          </ul>
        </div>
        <div className="flex justify-between items-center gap-[50px]">
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
