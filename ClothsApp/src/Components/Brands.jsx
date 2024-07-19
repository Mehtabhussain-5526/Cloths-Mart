import Nav from "./SubComponents/Nav";
import LeftAside from "./LeftAside";
import { useState } from "react";
import BrandGridSection from "./SubComponents/BrandGridSection";

const Brands = () => {
  const [hoverEl, SetHoverEl] = useState("");
  const handleHover = (e) => {
    SetHoverEl(e.target.innerText);
  };
  const logos = [
    {
      url: "/src/assets/Images/Brands Logo/gulahmed rounded.svg",
    },
    {
      url: "/src/assets/Images/Brands Logo/J dot rounded.svg",
    },
    {
      url: "/src/assets/Images/Brands Logo/khadi rounded.svg",
    },
    {
      url: "/src/assets/Images/Brands Logo/Sapphire rounded.svg",
    },
    {
      url: "/src/assets/Images/Brands Logo/GAP rounded.svg",
    },
    {
      url: "/src/assets/Images/Brands Logo/Alkaram rounded.svg",
    },
    {
      url: "/src/assets/Images/Brands Logo/EGO rounded.svg",
    },
    {
      url: "/src/assets/Images/Brands Logo/Almirah rounded.svg",
    },
  ];
  return (
    <>
      <div className="flex bg-[#F9FBFF]">
        <LeftAside />
        {/* main body */}
        <div className="max-w-[1200px] w-[100%] border">
          <Nav />
          {/* divs after nav compnents */}
          <div className="border xxl:pl-[80px] xl:pl-[40px] xl:pr-[40px] pt-[47px] pb-[100px] lg:pr-[20px] lg:pl-[20px]">
            {/* title and brands logos */}
            <div className="flex items-center justify-between ">
              <div className="">
                <p className="xxl:text-[24px] text-[#808191] font-normal leading-6 tracking-tighter xl:text-[20px] lg:text-[20px]">
                  Salesbag
                </p>
                <p className="xxl:text-[48px] font-semibold leading-[56px]  tracking-tighter xl:text-[35px] lg:text-[30px] lg:leading-[48px]">
                  Brands
                </p>
              </div>
              {/* logos div */}
              <div className="  flex xxl:gap-[30px] xl:gap-[30px] items-center lg:gap-[20px]">
                {logos.map((data, index) => (
                  <div
                    id={index}
                    className="border border-gray-400 xxl:p-[3px] xl:p-[2px] item-center xxl:max-h-[80px] xxl:max-w-[80px] rounded-full xl:max-w-[55px] xl:max-h-[55px] lg:max-h-[45px] lg:max-w-[45px] lg:p-[2px] "
                  >
                    <img src={data.url} />
                  </div>
                ))}
              </div>
            </div>
            {/* Recomendation Banners */}
            <div className="mt-[50px] max-w-[1060px] ">
              <div className="z-[-1]">
                <img src="/src/assets/Images/Banners/Khadi banner.png" />
              </div>
              <div className="xxl:max-h-[130px] flex justify-between xl:gap-[20px] xl:min-h-[130px]">
                <div className="flex gap-[40px] items-center">
                  <div className="ml-[43px] w-full xxl:max-h-[160px] xxl:max-w-[160px] xl:max-w-[130px] xl:max-h-[130px] xxl:mt-[-40px]  xl:mt-[-60px] lg:max-w-[90px] lg:max-h-[90px] lg:mt-[-55px]">
                    <img
                      src="/src/assets/Images/Brands Logo/gulahmed.svg"
                      className=""
                    />
                  </div>
                  <div className=" max-h-[50px] max-w-[400px] items-center">
                    <p className=" xxl:text-[32px] font-bold leading-6 tracking-tighter pb-[19px] xl:text-[25px] lg:text-[20px] lg:pb-[13px]">
                      Gul Ahmed
                    </p>
                    <p className=" xxl:text-[16px] font-normal xl:max-w-[400px] xl:leading-6 tracking-tighter xl:text-[14px] lg:text-[12px] lg:tracking-tight lg:max-w-[290px] lg:leading-5">
                      Lorem ipsum dolor sit amet consectetur. Consectetur in
                      enim non duis pellentesque eget fermentum phasellus ut
                    </p>
                  </div>
                </div>
                {/* Stats */}
                <div className="flex xl:gap-[60px] items-end text-end lg:gap-[30px] lg:mt-[50px]">
                  <div className="text-left ">
                    <p className=" xl:text-[32px] font-bold leading-6 tracking-tighter lg:text-[26px]">
                      162
                    </p>
                    <p className="xl:text-[16px] font-normal leading-6 tracking-tighter xl:mt-[10px] lg:text-[14px] ">
                      Products
                    </p>
                  </div>
                  <div className="text-left ">
                    <p className=" xl:text-[32px] font-bold leading-6 tracking-tighter lg:text-[26px]">
                      10+
                    </p>
                    <p className="xl:text-[16px] font-normal leading-6 tracking-tighter xl:mt-[10px] lg:text-[14px] ">
                      Catagories
                    </p>
                  </div>
                  <div className="text-left ">
                    <p className=" xl:text-[32px] font-bold leading-6 tracking-tighter lg:text-[26px]">
                      96k
                    </p>
                    <p className="xl:text-[16px] font-normal leading-6 tracking-tighter xl:mt-[10px] lg:text-[14px] ">
                      Reviews
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-[60px]">
              <ul className="flex gap-[80px] mt-[80px] ml-[30px] ">
                <li onMouseOver={handleHover} className="">
                  Stitched
                </li>
                <li onMouseOver={handleHover} className="">
                  Unstitched
                </li>
                <li onMouseOver={handleHover} className="">
                  Ideas Pret
                </li>
                <li onMouseOver={handleHover} className="">
                  Kaaj
                </li>
              </ul>
              {/*  Must add a active bar here */}
              <div className="relative">
                <div
                  className={`absolute mt-[10px] border border-[#6151FF]  transition-all duration-300  ${
                    hoverEl == "Stitched" && "block xxl:left-0 xxl:w-[130px] xl:left-[0%] xl:w-[120px] lg:left-[0%] lg:w-[100px]"
                  } ${
                    hoverEl == "Unstitched" && "block xxl:left-[13.5%] xxl:w-[140px] xl:left-[15%] xl:w-[130px] lg:left-[17%] lg:w-[130px]"
                  } ${
                    hoverEl == "Ideas Pret" && "block xxl:left-[29%] xxl:w-[130px] xl:left-[30.2%] xl:w-[150px] lg:left-[42%] lg:w-[130px]"
                  } ${hoverEl == "Kaaj" && "block xxl:left-[42%] xxl:w-[130px] xl:left-[45%] xl:w-[150px] lg:left-[%] lg:w-[100px]"} ${
                    hoverEl == "" && "hidden"
                  }`}
                ></div>
              </div>
            </div>
            {/* collection */}
            <div className="xxl:max-w-[1050px]">
              <BrandGridSection/>
            </div>
            <div className="text-center mt-[55px] max-w-[1045px]">
              <button className="  text-white bg-[#6151FF] text-[20px] font-semibold max-h-[56px] max-w-[163px] rounded-md pt-[14px] pb-[16px] pl-[32px] pr-[32px] tracking-tighter xl:mb-[74px] lg:mb-[0px]">
                Load More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brands;
