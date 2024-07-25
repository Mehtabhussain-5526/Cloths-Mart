import Nav from "./SubComponents/Nav";
import LeftAside from "./LeftAside";
import { useState } from "react";
import BrandGridSection from "./SubComponents/BrandGridSection";
import { SearchIcon } from "../../util/logo";

const Brands = () => {
  const [clickEl, SetClickEl] = useState("");
  const handleClick = (e) => {
    SetClickEl(e.target.innerText);
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
          <div className="border xxl:pl-[80px] xl:pl-[40px] xl:pr-[40px] lg:pt-[47px] lg:pb-[100px] md:pr-[20px] md:pl-[20px] md:pt-[20px]">
            {/* title and brands logos */}
            <div className="flex items-center justify-between md:flex-col lg:flex-row lg:gap-0 md:gap-5">
              <div className="lg:w-fit md:w-full sm:block mb:hidden md:pl-0 sm:pl-7">
                <p className="xxl:text-[24px] text-[#808191] font-normal leading-6 tracking-tighter sm:text-[20px]">
                  Salesbag
                </p>
                <p className="xxl:text-[48px] font-semibold leading-[56px]  tracking-tighter xl:text-[35px] lg:text-[30px] lg:leading-[48px] sm:text-[30px] md:leading-[30px]">
                  Brands
                </p>
              </div>
              {/* logos div */}
              <div className="flex xxl:gap-[30px] xl:gap-[30px] items-center lg:gap-[20px] mb:gap-[10px]">
                {logos.map((data, index) => (
                  <div
                    id={index}
                    className="border border-gray-400 xxl:p-[3px] mb:p-[2px] item-center xxl:max-h-[80px] xxl:max-w-[80px] rounded-full xl:max-w-[55px] xl:max-h-[55px] md:max-h-[45px] md:max-w-[45px] lg:p-[2px] mb:hidden "
                  >
                    <img src={data.url} />
                  </div>
                ))}
              </div>
            </div>
            {/* Recomendation Banners */}
            <div className="lg:mt-[50px] max-w-[1060px] md:mt-[30px] ">
              <div className="z-[-1]">
                <img src="/src/assets/Images/Banners/Khadi banner.png" />
              </div>
              <div className="xxl:max-h-[130px] lg:flex justify-between xl:gap-[20px] xl:min-h-[130px] md:flex-none-none ">
                <div className="flex sm:gap-[40px] mb:gap-5 items-center">
                  <div className="sm:ml-[43px] w-full xxl:max-h-[160px] xxl:max-w-[160px] xl:max-w-[130px] xl:max-h-[130px] xxl:mt-[-40px]  xl:mt-[-60px] md:max-w-[100px] md:max-h-[100px] lg:mt-[-55px] md:mt-[-25px] mb:max-w-[100px] mb:mt-[-20px] mb:ml-[30px] ">
                    <img
                      src="/src/assets/Images/Brands Logo/gulahmed.svg"
                      className=""
                    />
                  </div>
                  <div className=" max-h-[50px] max-w-[400px] items-center">
                    <p className=" xxl:text-[32px] font-bold leading-6 tracking-tighter pb-[19px] xl:text-[25px] lg:text-[20px] mb:pb-[12px]">
                      Gul Ahmed
                    </p>
                    <p className=" xxl:text-[16px] font-normal xl:max-w-[400px] xl:leading-6 tracking-tighter xl:text-[14px] mb:text-[13px] lg:tracking-tight lg:max-w-[290px] lg:leading-5 mb:pr-5">
                      Lorem ipsum dolor sit amet consectetur. Consectetur in
                      enim non duis pellentesque eget fermentum phasellus ut
                    </p>
                  </div>
                </div>
                {/* Stats */}
                <div className="mb:flex xxl:gap-[60px] md:items-end text-end lg:gap-[30px] lg:mt-[50px] mb:justify-end md:mt-[80px] md:gap-[80px] sm:mt-[40px] mb:mt-[60px] mb:gap-[80px] md:pr-0 sm:gap-[100px] sm:pr-[60px] mb:pr-[30px]">
                  <div className="text-left ">
                    <p className=" xl:text-[32px] font-bold leading-6 tracking-tighter lg:text-[26px]  mb:text-[32px]">
                      162
                    </p>
                    <p className="xl:text-[16px] font-normal leading-6 tracking-tighter xl:mt-[10px] lg:text-[14px]  mb:text-[16px]">
                      Products
                    </p>
                  </div>
                  <div className="text-left ">
                    <p className=" xl:text-[32px] font-bold leading-6 tracking-tighter lg:text-[26px] mb:text-[32px]">
                      10+
                    </p>
                    <p className="xl:text-[16px] font-normal leading-6 tracking-tighter xl:mt-[10px] lg:text-[14px] mb:text-[16px] ">
                      Catagories
                    </p>
                  </div>
                  <div className="text-left ">
                    <p className=" xl:text-[32px] font-bold leading-6 tracking-tighter lg:text-[26px] mb:text-[32px]">
                      96k
                    </p>
                    <p className="xl:text-[16px] font-normal leading-6 tracking-tighter xl:mt-[10px] lg:text-[14px] mb:text-[16px] ">
                      Reviews
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Search bar and Catagories dropdown */}
            <div className="sm:block mb:hidden md:px-0 sm:px-5">
              <div className="flex lg:ml-[40px] md:ml-0  gap-[50px] xl:mt-[40px] sm:mt-[50px]">
                <div className="bg-white flex items-center xxl:max-w-[650px] xl:min-w-[550px] w-full lg:border lg:border-transparent lg:rounded-md sm:rounded-lg sm:py-[10px] sm:pl-5 ">
                  {/* search */}
                  <SearchIcon />
                  <input
                    className="pl-[20px]"
                    type="text"
                    placeholder="Search here"
                  />
                </div>
                <div className="bg-white lg:px-[20px] sm:px-[10px] lg:border lg:border-transparent lg:rounded-md sm:rounded-lg ">
                  {/* dropdown */}
                  <select className="text-[#595959] xxl:min-w-[300px] xl:max-w-[228px] lg:min-w-[228px] sm:py-[15px] lg:text-[12px] lg:font-normal leading-5 sm:min-w-[150px]">
                    <option>Catagories</option>
                    <option value="">Stitiched</option>
                    <option value="">Unstitched</option>
                    <option value="">Ideas Pret</option>
                    <option value="">Kaaj</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="mb-[50px] md:px-0 mb:pr-9">
              <ul className="flex lg:gap-[80px] md:gap-[75px] mb:justify-between lg:mt-[40px] ml-[30px] mb:mt-[44px]">
                <li onClick={handleClick} className="">
                  Stitched
                </li>
                <li onClick={handleClick} className="">
                  Unstitched
                </li>
                <li onClick={handleClick} className="">
                  Ideas Pret
                </li>
                <li onClick={handleClick} className="">
                  Kaaj
                </li>
              </ul>
              {/*  Must add a active bar here */}
              <div className="relative lg:max-w-[550px] md:max-w-[525px]">
                <div
                  className={`absolute mt-[10px] border border-[#6151FF]  transition-all duration-300  ${
                    clickEl == "Stitched" &&
                    "block   lg:left-[0%]   lg:w-[120px]  md:left-[0%]   md:w-[110px] sm:left-[20px] sm:w-[90px] mb:left-[20px] mb:w-[90px]"
                  } ${
                    clickEl == "Unstitched" &&
                    "block   lg:left-[29%]   lg:w-[110px]  md:left-[30%]   md:w-[110px] sm:left-[32%] sm:w-[100px] mb:left-[32%] mb:w-[100px]"
                  } ${
                    clickEl == "Ideas Pret" &&
                    "block   lg:left-[58%]   lg:w-[110px] md:left-[59%]   md:w-[110px] sm:left-[63%] sm:w-[100px] mb:left-[61%] mb:w-[100px]"
                  } ${
                    clickEl == "Kaaj" &&
                    "block    lg:left-[85%]   lg:w-[90px] md:left-[89%]   md:w-[60px] sm:left-[92%] sm:w-[70px] mb:left-[90%] mb:w-[50px]"
                  } ${clickEl == "" && "hidden"}`}
                ></div>
              </div>
            </div>
            {/* collection */}
            <div className="md:px-0 mb:px-5">
              <BrandGridSection />
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
