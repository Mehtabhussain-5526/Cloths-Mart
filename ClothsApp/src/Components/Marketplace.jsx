import { useState } from "react";
import Nav from "./SubComponents/Nav";
import { AddBtn, Showing, SliderArrow } from "../../util/logo";
import LeftAside from "./LeftAside";
import GridSection from "./SubComponents/GridSection";

const Marketplace = () => {
  const [hoverEl, SetHoverEl] = useState("");
  const handleHover = (e) => {
    SetHoverEl(e.target.innerText);
  };
  const trending = [
    {
      url: "/src/assets/images/models/women/woman1.png",
      logo: "/src/assets/images/brands-logo/sapphire-rounded.svg",
      brand: "Sapphire",
      type: "Unstiched",
      price: "PKR 3000",
      liked: "",
    },
    {
      url: "/src/assets/images/models/women/woman2.png",
      logo: "/src/assets/images/brands-logo/sapphire-rounded.svg",
      brand: "Sapphire",
      type: "Unstiched",
      price: "PKR 3000",
      liked: "",
    },
    {
      url: "/src/assets/images/models/women/woman3.png",
      logo: "/src/assets/images/brands-logo/sapphire-rounded.svg",
      brand: "Sapphire",
      type: "Unstiched",
      price: "PKR 3000",
      liked: "",
    },
    {
      url: "/src/assets/images/models/women/woman4.png",
      logo: "/src/assets/images/brands-logo/sapphire-rounded.svg",
      brand: "Sapphire",
      type: "Unstiched",
      price: "PKR 3000",
      liked: "",
    },
  ];
  const trendingmen = [
    {
      url: "/src/assets/images/models/men/man1.png",
      logo: "/src/assets/images/brands-logo/alkaram-rounded.svg",
      brand: "Al Karam",
      type: "Unstiched",
      price: "PKR 3600",
      liked: "",
    },
    {
      url: "/src/assets/images/models/men/man2.png",
      logo: "/src/assets/images/brands-logo/alkaram-rounded.svg",
      brand: "Al Karam",
      type: "Unstiched",
      price: "PKR 4999",
      liked: "",
    },
    {
      url: "/src/assets/images/models/men/man3.png",
      logo: "/src/assets/images/brands-logo/khadi-rounded.svg",
      brand: "Khaadi",
      type: "Unstiched",
      price: "PKR 12,600",
      liked: "",
    },
    {
      url: "/src/assets/images/models/men/man4.png",
      logo: "/src/assets/images/brands-logo/khadi-rounded.svg",
      brand: "Khaadi",
      type: "Unstiched",
      price: "PKR 12,600",
      liked: "",
    },
  ];
  return (
    <>
      <div className="flex bg-[#F9FBFF]">
        <LeftAside />
        <div className="xl:max-w-[1200px] xl:w-full lg:min-w-[800px] lg:w-full md:min-w-[568px] md:w-full border-l-[1px]">
          <Nav />
          <div className="xl:pl-[80px] xl:pt-[47px] xl:max-w-[1200px] lg:w-full  md:pl-[20px] md:pr-[20px]  border-t-[1px] ">
            <div className=" xl:mb-[47px] lg:max-w-fit md:pl-0 sm:pl-5">
              <p className=" text-[#808191] xl:text-[24px] xl:font-normal xl:leading-6 xl:tracking-tighter lg:text-[20px] lg:mt-[40px] lg:font-normal lg:leading-6 lg:max-w-fit sm:text-[20px] sm:mt-[20px] sm:font-normal sm:leading-6 sm:tracking-tighter sm:max-w-fit sm:block mb:hidden mb-[8px]">
                Salesbag
              </p>
              <p className="xl:text-[48px] xl:font-semibold lg:mb-[50px] lg:text-[35px] lg:font-semibold lg:leading-[56px] lg:max-w-fit md:mb-[20px] sm:text-[30px] sm:font-semibold sm:leading-[30px] sm:tracking-tighter sm:max-w-fit sm:block mb:hidden">
                Market Place
              </p>
            </div>
            <div className="mb:relative flex overflow overflow-x-hidden xl:gap-[30px] mb:gap-[14px] mb:mt-5 md:mt-0 mb:min-h-[180px] md:pl-0 mb:pl-5">
              <img
                className=" mb:hidden sm:block md:min-w-[480px] md:max-h-[300px] sm:max-h-[197px] xl:rounded border border-transparent rounded-2xl"
                src="/src/assets/images/banners/ideas-banner-purple.png"
              />
              {/* mobile dev img */}
              <img
                className=" mb:w-[120px] mb:max-h-[180px] border border-transparent sm:hidden rounded-2xl"
                src="/src/assets/images/banners/ideas-vertical.png"
              />
              <img
                className=" mb:hidden sm:block md:min-w-[480px] md:max-h-[300px] sm:max-h-[197px] xl:rounded border border-transparent rounded-2xl"
                src="/src/assets/images/banners/ideas-banner-green.png"
              />
              {/* mobile dev img */}
              <img
                className=" mb:w-[120px] mb:max-h-[180px] border border-transparent sm:hidden rounded-2xl"
                src="/src/assets/images/banners/ideas-green-vertical-home.png"
              />
              <img
                className=" mb:hidden sm:block md:min-w-[480px] md:max-h-[300px] sm:max-h-[197px] xl:rounded border border-transparent rounded-2xl "
                src="/src/assets/images/banners/ideas-banner-purple.png"
              />
              {/* mobile dev img */}
              <img
                className=" mb:w-[120px] mb:max-h-[180px] border border-transparent sm:hidden rounded-2xl"
                src="/src/assets/images/banners/yellow-vertical-home.png"
              />
              <div className="mb:absolute bg-white h-[24px] w-[24px] border border-transparent rounded-full flex justify-center items-center right-0 top-[45%]">
                <SliderArrow />
              </div>
            </div>
            <div className="xl:mt-[32px] ml-[41px] xl:mb-[50px] lg:mt-[32px] lg:mb-[50px] sm:mt-[20px] md:mb-[20px] md:pl-0 sm:pl-5 sm:block mb:hidden">
              <Showing />
            </div>
            {/* Top trending women */}
            <div className="xxl:pr-[40px] xl:pr-[30px] md:pr-[20px] mb:mt-8">
              <p className=" xl:text-2xl  xl:mb-[50px] lg:text-[20px] lg:pl-0 lg:mb-[40px] md:text-[18px] leading-6 tracking-tighter  mb:mb-[24px] md:max-w-fit mb:pl-[20px] mb:text-[16px] font-semibold ">
                Top Trending Women
              </p>
              <div className="xl:gap-[30px] lg:grid-cols-4 mb:gap-[10px] grid sm:grid-cols-3 mb:grid-cols-2 md:px-0 mb:px-5 ">
                {trending.map((data, index) => (
                  <div
                    className="mb:relative bg-white border border-transparent mb:rounded-xl  mb:px-[9px] mb:py-[11px] sm:w-fit"
                    key={index}
                  >
                    <img
                      className="xl:mb-[21px] lg:mb-[16px] lg:min-w-[156px]"
                      src={data.url}
                    />
                    <div className="flex">
                      <div className=" xl:flex xl:justify-between xl:max-w-[240px] xl:w-full xl:items-center lg:flex lg:justify-between lg:max-w-[210px] lg:w-full lg:items-center">
                        <div className="flex items-center justify-center lg:gap-2 lg:border-none lg:static mb:bg-white mb:pl-[6px] mb:pr-[8px] mb:py-[3px] mb:border mb:border-transparent mb:rounded-[500px]  mb:absolute  sm:top-[25px] sm:left-[25px] mb:top-4 mb:left-4 mb:gap-[5px]">
                          <img
                            className="lg:h-[40px] lg:w-[40px] border rounded-full mb:w-[24px] mb:h-[24px] "
                            src={data.logo}
                          />
                          <div className="lg:pr-0 mb:pr-[10px]">
                            <p className="xl:text-[14px] xl:font-semibold xl:leading-5 xl:mb-[2px] lg:text-[12px] lg:font-semibold lg:leading-5 lg:mb-[2px] mb:text-[8px] mb:font-semibold mb:leading-[8px] mb:mb-[2px]">
                              {data.brand}
                            </p>
                            <p className="xl:text-[12px] text-[#808191] xl:font-normal xl:leading-4 lg:text-[10px] lg:font-normal lg:leading-4 mb:text-[7px] mb:leading-[8px]">
                              {data.type}
                            </p>
                          </div>
                        </div>
                        <div className=" lg:flex-none lg:py-0 lg:max-w-none lg:w-fit mb:flex mb:justify-between mb:items-center  mb:py-[10px] ">
                          <p className="xl:text-[14px] lg:text-[10px] lg:font-semibold lg:leading-5 lg:tracking-tighter md:text-[14px] mb:text-[12px] mb:font-semibold mb:leading-5">
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
            <div className="xxl:pr-[40px] xl:pr-[30px] md:pr-[20px] mb:mt-8">
              <p className=" xl:text-2xl  xl:mb-[50px] lg:text-[20px] lg:pl-0 lg:mb-[40px] md:text-[18px] leading-6 tracking-tighter  mb:mb-[20px] md:max-w-fit mb:pl-[20px] mb:text-[16px] font-semibold ">
                Top Trending Men
              </p>
              <div className="xl:gap-[30px] lg:grid-cols-4 mb:gap-[10px] grid sm:grid-cols-3 mb:grid-cols-2 md:px-0 mb:px-5 ">
                {trendingmen.map((data, index) => (
                  <div
                    className="mb:relative bg-white border border-transparent mb:rounded-xl  mb:px-[9px] mb:py-[11px] sm:w-fit"
                    key={index}
                  >
                    <img
                      className="xl:mb-[21px] lg:mb-[16px] lg:min-w-[156px]"
                      src={data.url}
                    />
                    <div className="flex">
                      <div className=" xl:max-w-[240px] xl:w-full  lg:flex lg:justify-between lg:max-w-[210px] lg:w-full lg:items-center">
                        <div className="flex items-center justify-center lg:gap-2 lg:border-none lg:static mb:bg-white mb:pl-[6px] mb:pr-[8px] mb:py-[3px] mb:border mb:border-transparent mb:rounded-[500px]  mb:absolute  sm:top-[25px] sm:left-[25px] mb:top-4 mb:left-4 mb:gap-[5px]">
                          <img
                            className="lg:h-[40px] lg:w-[40px] border rounded-full mb:w-[24px] mb:h-[24px] "
                            src={data.logo}
                          />
                          <div className="lg:pr-0 mb:pr-[10px]">
                            <p className="xl:text-[14px] xl:font-semibold xl:leading-5 xl:mb-[2px] lg:text-[12px] lg:font-semibold lg:leading-5 lg:mb-[2px] mb:text-[8px] mb:font-semibold mb:leading-[8px] mb:mb-[2px]">
                              {data.brand}
                            </p>
                            <p className="xl:text-[12px] text-[#808191] xl:font-normal xl:leading-4 lg:text-[10px] lg:font-normal lg:leading-4 mb:text-[7px] mb:leading-[8px]">
                              {data.type}
                            </p>
                          </div>
                        </div>
                        <div className=" lg:flex-none lg:py-0 lg:max-w-none lg:w-fit mb:flex mb:justify-between mb:items-center  mb:py-[10px] ">
                          <p className="xl:text-[14px] lg:text-[10px] lg:font-semibold lg:leading-5 lg:tracking-tighter md:text-[14px] mb:text-[12px] mb:font-semibold mb:leading-5">
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
            {/* Active Bar */}
            <div className="xl:mt-[80px] xl:ml-[30px] xl:mb-[60px] lg:mt-[60px] lg:mb-[60px] mb:mt-[40px] md:pl-0 mb:pl-[28px] ">
              <ul className="flex xl:gap-[80px]  mb:gap-[80px]">
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
              <div className="relative max-w-[1069px]">
                <div className="absolute border-t-[1px] mt-[17px] w-full"></div>
              </div>
              <div className="relative sm:mb-[45px] md:max-w-[360px]">
                <div
                  className={`absolute xl:ml-[-30px] mt-[17px] border border-[#6151FF] lg:w-[120px] mb:w-[100px] transition-all duration-300 lg:mb-0 sm:mb-[20px] ${
                    hoverEl == "Women" && "block mb:left-0 "
                  } ${
                    hoverEl == "Men" &&
                    "block md:left-[35%] md:w-[80px] mb:left-[120px]"
                  } ${
                    hoverEl == "Kids" &&
                    "block xl:left-[255px] md:left-[230px] mb:left-[230px]"
                  } ${hoverEl == "" && "hidden"} `}
                ></div>
              </div>
            </div>
            {/* End of Active bar */}
            <div className="xxl:pr-[40px] xl:pr-[30px] mb:pr-[20px] md:pl-0 mb:pl-5 md:mt-0 mb:mt-[40px]">
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
