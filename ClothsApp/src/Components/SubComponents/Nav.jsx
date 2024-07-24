import {
  ArrowDown,
  Bell,
  Like,
  SearchIcon,
  HeratFilledWithNotific,
  BellWithNotific,
  ManuBar,
  Logo,
  PlusSignInviteBtn,
  CartIcon,
  PeopleIcon,
  ChatIcon,
  LikeHallow,
  PurpleHeart,
  HeartHallow,
  GreenDot,
} from "../../../util/logo";
import InviteBtn from "./InviteBtn";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();
  const Avatars = [
    { url: "/src/assets/Images/Avatars/Henry.png" },
    { url: "/src/assets/Images/Avatars/Leslie.png" },
    { url: "/src/assets/Images/Avatars/Lindsay.png" },
    { url: "/src/assets/Images/Avatars/Michael.png" },
    { url: "/src/assets/Images/Avatars/Tom Cook.png" },
  ];
  return (
    <>
      <div className="md:block mb:hidden">
        <div className="w-full md:flex md:justify-between md:items-center xl:h-[84px] xl:pb-5 xl:pt-5 xxl:pl-[80px] xxl:pr-[70px] xl:pl-[30px] xl:pr-[30px] lg:pl-[50px] lg:pr-[50px]  md:p-[20px]">
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
          <div className="xl:block mb:hidden">
            <ul className="text-[#808191] xl:w-[100%] xl:max-w-[250px] xl:h-[44px] flex justify-between items-center xl:gap-[40px] lg:gap-[20px]">
              <li className="cursor-pointer xl:text-[14px]">About</li>
              <li className="cursor-pointer xl:text-[14px]">Blogs</li>
              <li className="cursor-pointer xl:text-[14px]">Contact Us</li>
            </ul>
          </div>
          <div className="flex gap-[30px] md:min-w-[185px] ">
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
      </div>

      {/* Nav for small Screens */}
      <div className="md:hidden flex items-center justify-between gap-[100px] px-[32px] py-[16px] w-screen">
        <div className="flex items-center gap-[11px]">
          <ManuBar />
          <img src="/src/assets/Images/Avatars/Leslie.png" />
        </div>
        <div className="flex items-center gap-[19px]">
          <button className="bg-[#6151FF] text-white border border-transparent rounded-[5000px] py-[6px] px-[20px] flex justify-center items-center gap-[6px]">
            <span className="text-[12px] font-normal leading-[14px]">
              New Post
            </span>
            <span>
              <PlusSignInviteBtn />{" "}
            </span>
          </button>
          <SearchIcon />
        </div>
      </div>
      <div className="md:hidden flex items-center justify-between px-[32px] py-[10px] w-screen border ">
        <Link to="/">
          <div className=" w-[40px] h-[40px] p-[5px] flex items-center justify-center border border-transparent rounded-full hover:bg-[#6151FF] hover:bg-opacity-[7%]">
            <CartIcon />
          </div>
        </Link>
        <Link to="/brands">
          <div className=" w-[40px] h-[40px] p-[5px] flex items-center justify-center border border-transparent rounded-full hover:bg-[#6151FF] hover:bg-opacity-[7%]">
            <PeopleIcon />
          </div>
        </Link>
        <Link to="/pinneditems">
          <div className=" w-[40px] h-[40px] p-[5px] flex items-center justify-center border border-transparent rounded-full hover:bg-[#6151FF] hover:bg-opacity-[7%]">
            <ChatIcon />
          </div>
        </Link>
        <Link to="/marketplacechat">
          <div className=" w-[40px] h-[40px] p-[5px] flex items-center justify-center border border-transparent rounded-full hover:bg-[#6151FF] hover:bg-opacity-[7%]">
            <Bell />
          </div>
        </Link>
        <Link to="">
          <div className=" w-[40px] h-[40px] p-[5px] flex items-center justify-center border border-transparent rounded-full hover:bg-[#6151FF] hover:bg-opacity-[7%]">
            <HeartHallow />
          </div>
        </Link>
      </div>
      <div className="md:hidden flex items-center justify-between pl-[32px] py-[10px] w-screen border overflow-x-hidden ">
        {Avatars.map((data, index) => (
          <div className="relative">
            <img src={data.url} />
            <div className="absolute top-0 right-0">
              {" "}
              <GreenDot />{" "}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Nav;
