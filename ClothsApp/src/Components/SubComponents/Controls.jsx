import {
  BrandsIcon,
  ChatIcon,
  LogoutIcon,
  MarketIcon,
  NewsIcon,
  PeopleIcon,
  SettingsIcon,
} from "../../../util/logo";
import { Link, useLocation } from "react-router-dom";

const Controls = () => {
  const location = useLocation();
  return (
    <>
      <p className="text-[#808191] mt-[30px] mb-[30px] font-normal  text-[11px] leading-5 lg:ml-[20px] lg:max-w-fit">
        News Feed
      </p>
      <Link to="/marketplacechat">
        <div className="flex pl-[10px] h-[46px] text-[#808191] items-center border border-transparent rounded-lg hover:text-white hover:bg-[#6151FF] mb-[15px] xl:max-w-[176px] md:max-w-[160px] lg:w-[100%] lg:ml-[20px]">
          <NewsIcon />
          {location.pathname == "/marketplacechat" ? (
            <p className=" ml-[10px] xl:text-[16px] lg:text-[14px] md:text-[13px]">
              Home
            </p>
          ) : (
            <p className=" ml-[10px] xl:text-[16px] lg:text-[14px] md:text-[13px]">
              News Feed
            </p>
          )}
        </div>
      </Link>
      <Link to="/">
        <div className="flex pl-[10px] h-[46px] text-[#808191] items-center border border-transparent rounded-lg hover:text-white hover:bg-[#6151FF] mb-[15px] xl:max-w-[176px] md:max-w-[160px] lg:w-[100%] lg:ml-[20px]">
          <MarketIcon />
          <p className=" ml-[10px] xl:text-[16px] lg:text-[14px] md:text-[13px]">
            {" "}
            Market Place{" "}
          </p>
        </div>
      </Link>
      <Link to="/brands">
        <div className="flex pl-[10px] h-[46px] text-[#808191] items-center border border-transparent rounded-lg hover:text-white hover:bg-[#6151FF] mb-[15px] xl:max-w-[176px] md:max-w-[160px] lg:w-[100%] lg:ml-[20px]">
          <BrandsIcon />
          {location.pathname == "/marketplacechat" ? (
            <p className=" ml-[10px] xl:text-[16px] lg:text-[14px] md:text-[13px]">
              Profile
            </p>
          ) : (
            <p className=" ml-[10px] xl:text-[16px] lg:text-[14px] md:text-[13px]">
              Brands
            </p>
          )}
        </div>
      </Link>
      <Link to="/pinneditems">
        <div className="flex pl-[10px] h-[46px] text-[#808191] items-center border border-transparent rounded-lg hover:text-white hover:bg-[#6151FF] mb-[15px] xl:max-w-[176px] md:max-w-[160px] lg:w-[100%] lg:ml-[20px]">
          <PeopleIcon />
          {location.pathname == "/marketplacechat" ? (
            <p className=" ml-[10px] xl:text-[16px] lg:text-[14px] md:text-[13px]">
              Stores/Brands
            </p>
          ) : (
            <p className=" ml-[10px] xl:text-[16px] lg:text-[14px] md:text-[13px]">
              People
            </p>
          )}
        </div>
      </Link>
      {location.pathname == "/marketplacechat" && (
        <div className="flex pl-[10px] h-[46px] text-[#808191] items-center border border-transparent rounded-lg hover:text-white hover:bg-[#6151FF] mb-[15px] xl:max-w-[176px] md:max-w-[160px] lg:w-[100%] lg:ml-[20px]">
          <ChatIcon />
          <p className=" ml-[10px] xl:text-[16px] lg:text-[14px] md:text-[13px]">
            Chat
          </p>
        </div>
      )}

      {location.pathname == "/marketplacechat" && (
        <div className="flex pl-[10px] h-[46px] text-[#808191] items-center border border-transparent rounded-lg hover:text-white hover:bg-[#6151FF] mb-[15px] xl:max-w-[176px] md:max-w-[160px] lg:w-[100%] lg:ml-[20px]">
          <SettingsIcon />
          <p className=" ml-[10px] xl:text-[16px] lg:text-[14px] md:text-[13px]">
            Settings
          </p>
        </div>
      )}

      {location.pathname == "/marketplacechat" && (
        <div className="flex pl-[10px] h-[46px] text-[#808191] items-center border border-transparent rounded-lg hover:text-white hover:bg-[#6151FF] mb-[15px] xl:max-w-[176px] md:max-w-[160px] lg:w-[100%] lg:ml-[20px]">
          <LogoutIcon />
          <p className=" ml-[10px] xl:text-[16px] lg:text-[14px] md:text-[13px]">
            Logout
          </p>
        </div>
      )}
    </>
  );
};

export default Controls;
