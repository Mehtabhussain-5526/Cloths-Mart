import { useState } from "react";
import Nav from "./SubComponents/Nav";
import { AddBtn, Showing } from "../../util/logo";
import LeftAside from "./LeftAside";
import GridSection from "./SubComponents/GridSection";

const Marketplace = () => {
  const [hoverEl, SetHoverEl] = useState("");
  const handleHover = (e) => {
    SetHoverEl(e.target.innerText);
  };
  const trending = [
    {
      url: "/src/assets/Images/Models/Women/woman 1.png",
      logo: "/src/assets/Images/Brands Logo/Sapphire rounded.svg",
      brand: "Sapphire",
      type: "Unstiched",
      price: "PKR 3000",
      liked: "",
    },
    {
      url: "/src/assets/Images/Models/Women/woman 2.png",
      logo: "/src/assets/Images/Brands Logo/Sapphire rounded.svg",
      brand: "Sapphire",
      type: "Unstiched",
      price: "PKR 3000",
      liked: "",
    },
    {
      url: "/src/assets/Images/Models/Women/woman 3.png",
      logo: "/src/assets/Images/Brands Logo/Sapphire rounded.svg",
      brand: "Sapphire",
      type: "Unstiched",
      price: "PKR 3000",
      liked: "",
    },
    {
      url: "/src/assets/Images/Models/Women/woman 4.png",
      logo: "/src/assets/Images/Brands Logo/Sapphire rounded.svg",
      brand: "Sapphire",
      type: "Unstiched",
      price: "PKR 3000",
      liked: "",
    },
  ];
  const trendingmen = [
    {
      url: "/src/assets/Images/Models/Men/man 1.png",
      logo: "/src/assets/Images/Brands Logo/Alkaram rounded.svg",
      brand: "Al Karam",
      type: "Unstiched",
      price: "PKR 3600",
      liked: "",
    },
    {
      url: "/src/assets/Images/Models/Men/man 2.png",
      logo: "/src/assets/Images/Brands Logo/Alkaram rounded.svg",
      brand: "Al Karam",
      type: "Unstiched",
      price: "PKR 4999",
      liked: "",
    },
    {
      url: "/src/assets/Images/Models/Men/man 3.png",
      logo: "/src/assets/Images/Brands Logo/khadi rounded.svg",
      brand: "Khaadi",
      type: "Unstiched",
      price: "PKR 12,600",
      liked: "",
    },
    {
      url: "/src/assets/Images/Models/Men/man 4.png",
      logo: "/src/assets/Images/Brands Logo/khadi rounded.svg",
      brand: "Khaadi",
      type: "Unstiched",
      price: "PKR 12,600",
      liked: "",
    },
  ];
  return (
    <>
      <div className="flex bg-[#F9FBFF]  ">
        <LeftAside />
        <div className="xl:border  xl:max-w-[1200px] xl:w-full lg:min-w-[800px] lg:w-full md:min-w-[568px] md:w-full">
          <Nav />
          <div className="xl:border  xl:pl-[80px] xl:pt-[47px] xl:max-w-[1200px] lg:w-full  md:pl-[20px] md:pr-[20px] lg:border lg:border-r-transparent">
            <div className=" xl:mb-[47px] lg:max-w-fit ">
              <p className=" text-[#808191]  xl:text-[24px] xl:font-normal xl:leading-6 xl:tracking-tighter lg:text-[20px] lg:mt-[40px] lg:font-normal lg:leading-6 lg:tracking-tighter lg:max-w-fit md:text-[20px] md:mt-[20px] md:font-normal md:leading-6 md:tracking-tighter md:max-w-fit ">
                Salesbag
              </p>
              <p className="xl:text-[48px] xl:font-semibold xl:leading-[56px] xl:tracking-tighter lg:mb-[35px] lg:text-[35px] lg:font-semibold lg:leading-[56px] lg:tracking-tighter lg:max-w-fit md:mb-[20px] md:text-[30px] md:font-semibold md:leading-[30px] md:tracking-tighter md:max-w-fit">
                Market Place
              </p>
            </div>
            <div className="flex overflow sm:overflow-x-hidden xl:gap-[30px] md:gap-[20px] ">
              <img
                className="xl:min-w-[420px] xl:max-h-[240px]  xl:h-full xl:rounded lg:min-w-[350px] lg:border lg:border-transparent lg:rounded-2xl md:min-w-[250px]"
                src="/src/assets/Images/Banners/Ideas banner purple.png"
              />
              <img
                className="xl:min-w-[420px]  xl:max-h-[240px] xl:h-full  xl:rounded lg:min-w-[350px]  lg:border lg:border-transparent lg:rounded-2xl md:min-w-[250px]"
                src="/src/assets/Images/Banners/Ideas banner green.png"
              />
              <img
                className="xl:min-w-[420px]  xl:max-h-[240px]  xl:h-full xl:rounded lg:min-w-[350px]  lg:border lg:border-transparent lg:rounded-2xl md:min-w-[250px]"
                src="/src/assets/Images/Banners/Ideas banner purple.png"
              />
            </div>
            <div className="xl:mt-[32px] xl:mb-[50px] lg:mt-[32px] lg:mb-[50px] md:mt-[20px] md:mb-[20px]">
              <Showing />
            </div>
            {/* Top trending women */}
            <div className="xxl:pr-[40px] xl:pr-[30px] md:pr-[20px] ">
              <p className=" xl:text-2xl xl:font-semibold xl:mb-[50px] lg:text-[20px] lg:pl-0 lg:mb-[40px] md:text-[18px] md:leading-6 md:tracking-tighter md:font-semibold md:mb-[15px] md:max-w-fit sm:pl-[17px]">
                Top Trending Women
              </p>
              <div className="xl:gap-[30px] lg:grid-cols-4 md:gap-[20px] sm:grid sm:grid-cols-2 ">
                {trending.map((data, index) => (
                  <div
                    className="sm:relative bg-white border border-transparent md:rounded-xl  md:p-[8px] sm:w-fit"
                    key={index}
                  >
                    <img
                      className="xl:mb-[21px] lg:mb-[16px] lg:min-w-[156px]"
                      src={data.url}
                    />
                    <div className="flex">
                      <div className=" xl:flex xl:justify-between xl:max-w-[240px] xl:w-full xl:items-center lg:flex lg:justify-between lg:max-w-[210px] lg:w-full lg:items-center">
                        <div className="flex items-center justify-center lg:gap-2 lg:border-none lg:static sm:bg-white sm:pl-[6px] sm:pr-[8px] sm:py-[3px] sm:border sm:border-transparent sm:rounded-[500px]  sm:absolute  sm:top-[25px] sm:left-[25px] sm:gap-[5px]">
                          <img
                            className="xl:max-h-[40px] xl:max-2-[40px] lg:max-h-[40px] lg:max-w-[40px] md:border md:rounded-full md:w-[24px] md:h-[24px] "
                            src={data.logo}
                          />
                          <div className="lg:pr-0 sm:pr-[10px]">
                            <p className="xl:text-[14px] xl:font-semibold xl:leading-5 xl:mb-[3px] lg:text-[12px] lg:font-semibold lg:leading-5 lg:mb-[3px] sm:text-[8px] sm:font-semibold sm:leading-[8px] sm:mb-[2px]">
                              {data.brand}
                            </p>
                            <p className="xl:text-[12px] text-[#808191] xl:font-normal xl:leading-4 lg:text-[10px] lg:font-normal lg:leading-4 sm:text-[7px] sm:leading-[8px]">
                              {data.type}
                            </p>
                          </div>
                        </div>
                        <div className=" lg:flex-none lg:py-0 lg:max-w-none lg:w-fit sm:flex sm:justify-between sm:items-center  sm:py-[10px] ">
                          <p className="xl:text-[14px] lg:text-[10px] lg:font-semibold lg:leading-5 lg:tracking-tighter md:text-[14px] sm:text-[12px] sm:font-semibold sm:leading-5">
                            {data.price}
                          </p>
                          <AddBtn className="absolute right-[10px] lg:hidden" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Top trending men */}
            <div className="xxl:pr-[40px] xl:pr-[30px] md:pr-[20px] ">
              <p className=" xl:text-2xl xl:font-semibold xl:mb-[50px] lg:text-[20px] lg:mb-[40px] lg:pl-0 md:text-[18px] md:leading-6 md:tracking-tighter md:font-semibold md:mb-[15px] md:mt-[15px] md:max-w-fit sm:pl-[17px]">
                Top Trending Men
              </p>
              <div className=" xl:gap-[30px] lg:grid-cols-4 md:gap-[20px] sm:grid sm:grid-cols-2">
                {trendingmen.map((data, index) => (
                  <div
                    className="sm:relative bg-white border border-transparent md:rounded-xl  md:p-[8px] sm:w-fit"
                    key={index}
                  >
                    <img
                      className="xl:mb-[21px] lg:mb-[16px] lg:min-w-[156px]"
                      src={data.url}
                    />
                    <div className="flex">
                      <div className=" xl:flex xl:justify-between xl:max-w-[240px] xl:w-full xl:items-center lg:flex lg:justify-between lg:max-w-[210px] lg:w-full lg:items-center">
                        <div className="flex items-center justify-center lg:gap-2 lg:border-none lg:static sm:bg-white sm:pl-[6px] sm:pr-[8px] sm:py-[3px] sm:border sm:border-transparent sm:rounded-[500px]  sm:absolute  sm:top-[25px] sm:left-[25px] sm:gap-[5px]">
                          <img
                            className="xl:max-h-[40px] xl:max-2-[40px] lg:max-h-[40px] lg:max-w-[40px] md:border md:rounded-full md:w-[24px] md:h-[24px]"
                            src={data.logo}
                          />

                          <div className="lg:pr-0 sm:pr-[10px]">
                            <p className="xl:text-[14px] xl:font-semibold xl:leading-5 xl:mb-[3px] lg:text-[12px] lg:font-semibold lg:leading-5 lg:mb-[3px] sm:text-[8px] sm:font-semibold sm:leading-[8px] sm:mb-[2px]">
                              {data.brand}
                            </p>
                            <p className="xl:text-[12px] text-[#808191] xl:font-normal xl:leading-4 lg:text-[10px] lg:font-normal lg:leading-4 sm:text-[7px] sm:leading-[8px]">
                              {data.type}
                            </p>
                          </div>
                        </div>
                        <div className="lg:flex-none lg:py-0 lg:max-w-none lg:w-fit sm:flex sm:justify-between sm:items-center  sm:py-[10px]">
                          <p className="xl:text-[14px] lg:text-[10px] lg:font-semibold lg:leading-5 lg:tracking-tighter md:text-[14px] sm:text-[12px] sm:font-semibold sm:leading-5">
                            {data.price}
                          </p>
                          <AddBtn className="absolute right-[10px] lg:hidden" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* woman man kids collection */}
            <div className="xl:mt-[80px] xl:ml-[30px] xl:mb-[60px] lg:mt-[60px] lg:mb-[60px] sm:mt-[40px] sm:pl-[9px] ">
              <ul className="flex xl:gap-[80px]  md:gap-[80px] lg:ml-[30px]">
                <li
                  onMouseOver={handleHover}
                  className="cursor-pointer active:font-semibold "
                  id="Women"
                >
                  Women
                </li>
                <li
                  onMouseOver={handleHover}
                  className="cursor-pointer active:font-semibold "
                  id="Men"
                >
                  Men
                </li>
                <li
                  onMouseOver={handleHover}
                  className="cursor-pointer active:font-semibold "
                  id="Kids"
                >
                  Kids
                </li>
              </ul>
              <div className="relative md:mb-[40px]">
                <div
                  className={`absolute mt-[10px] border border-[#6151FF] w-[120px] transition-all duration-300 lg:mb-0 sm:mb-[20px] ${
                    hoverEl == "Women" && "block left-0"
                  } ${hoverEl == "Men" && "block left-[130px]"} ${
                    hoverEl == "Kids" && "block left-[250px]"
                  } ${hoverEl == "" && "hidden"} `}
                ></div>
              </div>
            </div>
            {/* End of Active bar */}
            <div className="xxl:pr-[40px] xl:pr-[30px] md:pr-[20px] ">
              <GridSection />
              <div className="text-center mt-[55px] max-w-[1045px]">
                <button className="  text-white bg-[#6151FF] xl:text-[20px] font-semibold max-h-[56px] max-w-[163px] rounded-md pt-[14px] pb-[16px] pl-[32px] pr-[32px] tracking-tighter mb-[74px]">
                  Load More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Marketplace;
