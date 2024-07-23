import {
  ArrowDown,
  Bell,
  Like,
  SearchIcon,
  HeratFilledWithNotific,
  BellWithNotific,
} from "../../../util/logo";
import InviteBtn from "./InviteBtn";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();
  return (
    <>
      <div className="xl:w-[100%] xl:max-w-[1200px] xl:h-[84px] xl:flex xl:pb-5 xl:pt-5 xxl:pl-[80px] xxl:pr-[70px] xl:pl-[30px] xl:pr-[30px] xl:justify-between lg:min-w-[800px] lg:w-full md:min-w-[566px]  lg:pl-[50px] lg:pr-[50px] md:flex md:justify-between lg:items-center md:p-[20px]">
        <div
          className={`flex items-center lg:bg-white px-[20px] border border-transparent rounded-md  md:bg-transparent ${
            location.pathname == "/marketplacechat" &&
            "xxl:bg-white sm:bg-transparent"
          }`}
        >
          <div>
            <SearchIcon />
          </div>
          <input
            className={`xl:max-w-[350px]  xl:pl- lg:p-[7px] lg:pl-3 lg:block md:hidden ${
              location.pathname == "/marketplacechat" && "xxl:block sm:hidden"
            }`}
            placeholder="Search Everything"
          />
        </div>
        <div className="xl:block sm:hidden">
          <ul className="text-[#808191] xl:w-[100%] xl:max-w-[250px] xl:h-[44px] flex justify-between items-center xl:gap-[40px] lg:gap-[20px]">
            <li className="cursor-pointer xl:text-[14px]">About</li>
            <li className="cursor-pointer xl:text-[14px]">Blogs</li>
            <li className="cursor-pointer xl:text-[14px]">Contact Us</li>
          </ul>
        </div>
        <div className="flex gap-[30px]   md:min-w-[185px] ">
          {/* invite btn */}
          {location.pathname == "/marketplacechat" && <InviteBtn />}
          <div className="flex justify-between items-center lg:gap-[20px] lg:max-w-[185px]  md:min-w-[186px]">
            <div className="flex items-center border border-transparent rounded-full cursor-pointer hover:bg-[#6151FF] hover:bg-opacity-[10%]">
              {location.pathname == "/pinneditems" ? (
                <HeratFilledWithNotific className="cursor-pointer" />
              ) : location.pathname == "/brands" ? (
                <HeratFilledWithNotific className="cursor-pointer" />
              ) : (
                <div className="h-[44px] w-[44px] flex items-center justify-center">
                  <Like className="cursor-pointer " />
                </div>
              )}
            </div>
            <div className="flex justify-center items-center border border-transparent rounded-full cursor-pointer hover:bg-[#6151FF] hover:bg-opacity-[10%] h-[44px] w-[44px]">
              {location.pathname == "/pinneditems" ? (
                <BellWithNotific className="cursor-pointer mr-[-7px] mt-[-7px]" />
              ) : location.pathname == "/brands" ? (
                <BellWithNotific className="cursor-pointer mr-[-7px] mt-[-7px]" />
              ) : (
                <Bell className="cursor-pointer" />
              )}
            </div>

            <div className="flex items-center">
              <img
                className="cursor-pointer"
                src="/src/assets/Images/Avatars/Leslie.png"
              />
              <ArrowDown className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
