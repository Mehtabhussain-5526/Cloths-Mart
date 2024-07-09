import React from "react";
import Nav from "./SubComponents/Nav";
import NewFeed from "./SubComponents/NameLogo";
import OnlinePeople from "./SubComponents/OnlinePeople";
import Groups from "./SubComponents/Groups";
import Controls from "./SubComponents/Controls";
import { Showing } from "../../util/logo";

const Marketplace = () => {
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
      logo: "/src/assets/Images/Brands Logo/J dot rounded.svg",
      brand: "Junaid Jamshed",
      type: "Unstiched",
      price: "PKR 3600",
      liked: "",
    },
    {
      url: "/src/assets/Images/Models/Men/man 2.png",
      logo: "/src/assets/Images/Brands Logo/J dot rounded.svg",
      brand: "Junaid Jamshed",
      type: "Unstiched",
      price: "PKR 4999",
      liked: "",
    },
    {
      url: "/src/assets/Images/Models/Men/man 3.png",
      logo: "/src/assets/Images/Brands Logo/gulahmed rounded.svg",
      brand: "Gul Ahmed",
      type: "Unstiched",
      price: "PKR 12,600",
      liked: "",
    },
    {
      url: "/src/assets/Images/Models/Men/man 4.png",
      logo: "/src/assets/Images/Brands Logo/gulahmed rounded.svg",
      brand: "Gul Ahmed",
      type: "Unstiched",
      price: "PKR 12,600",
      liked: "",
    },
  ];
  const collection = [
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
  return (
    <>
      <div className="flex bg-[#F9FBFF]  ">
        <div className=" xl:pt-5 xl:pl-5 xl:pr-5 xl:max-w-[240px] xl:w-[100%] lg:max-w-[224px] lg:w-full lg:border" >
          <NewFeed />
          <Controls />
          <OnlinePeople />
          <Groups />
        </div>
        <div className="xl:border  xl:max-w-[1200px] xl:w-full lg:max-w-[800px] lg:w-full">
          <Nav />
          <div className="xl:border  xl:pl-[80px] xl:pt-[47px] lg:w-full lg:pl-[20px] lg:pr-[20px] lg:border lg:border-r-transparent">
            <div className=" xl:mb-[47px] lg:max-w-fit">
              <p className=" text-[#808191]  xl:text-[24px] xl:font-normal xl:leading-6 xl:tracking-tighter lg:text-[20px] lg:mt-[40px] lg:font-normal lg:leading-6 lg:tracking-tighter lg:max-w-fit">
                Salesbag
              </p>
              <p className="xl:text-[48px] xl:font-semibold xl:leading-[56px] xl:tracking-tighter lg:mb-[35px] lg:text-[35px] lg:font-semibold lg:leading-[56px] lg:tracking-tighter lg:max-w-fit">
                Market Place
              </p>
            </div>
            <div className="xl:flex xl:overflow-x-hidden xl:gap-[30px] lg:flex lg:gap-[20px]">
              <img
                className="xl:border xl:border-transparent xl:max-w-[420px] xl:w-[100%] xl:h-[240px]  xl:rounded-2xl lg:max-w-[350px] lg:border lg:border-transparent lg:rounded-2xl"
                src="/src/assets/Images/Banners/Ideas banner purple.png" 
              />
              <img
                className="xl:border xl:border-transparent xl:max-w-[420px] xl:w-[100%] xl:h-[240px]  xl:rounded-2xl lg:max-w-[350px]  lg:border lg:border-transparent lg:rounded-2xl"
                src="/src/assets/Images/Banners/Ideas banner green.png"
              />
              <img
                className="xl:border xl:border-transparent xl:max-w-[420px] xl:w-[100%] xl:h-[240px]  xl:rounded-2xl lg:max-w-[350px]  lg:border lg:border-transparent lg:rounded-2xl"
                src="/src/assets/Images/Banners/Ideas banner purple.png"
              />
            </div>
            <div className="xl:mt-[32px] xl:mb-[50px] lg:mt-[32px] lg:mb-[50px]">
              <Showing />
            </div>
            {/* Top trending women */}
            <div>
              <p className=" xl:text-2xl xl:leading-6 xl:tracking-tighter xl:font-semibold xl:mb-[50px] lg:text-[20px] lg:leading-6 lg:tracking-tighter lg:font-semibold lg:mb-[40px]">
                Top Trending Women
              </p>
              <div className=" flex flex-wrap xl:gap-[30px] lg:gap-[30px] ">
                {trending.map((data, index) => (
                  <div
                    className="bg-white border border-transparent xl:rounded-xl lg:border lg:border-transparent lg:rounded-xl lg:p-[10px]"
                    key={index}
                  >
                    <img className="xl:mb-[21px] xl:max-w-[240px] lg:mb-[21px] lg:max-w-[210px] " src={data.url} />
                    <div className="flex ">
                      <div className=" xl:flex xl:justify-between xl:max-w-[240px] xl:w-full xl:items-center lg:flex lg:justify-between lg:max-w-[210px] lg:w-full lg:items-center ">
                        <div className=" flex gap-[12px] items-center justify-center ">
                          <img
                            className="xl:max-h-[40px] xl:max-2-[40px] lg:max-h-[40px] lg:max-2-[40px] lg:border lg:rounded-full"
                            src={data.logo}
                          />

                          <div>
                            <p className="xl:text-[14px] xl:font-semibold xl:leading-5 xl:mb-[3px] lg:text-[14px] lg:font-semibold lg:leading-5 lg:mb-[3px]">
                              {data.brand}
                            </p>
                            <p className="xl:text-[12px] text-[#808191] xl:font-normal xl:leading-4 lg:text-[12px] lg:font-normal lg:leading-4 ">
                              {data.type}
                            </p>
                          </div>
                        </div>
                        <div className="">
                          <p className="xl:text-[14px] xl:font-semibold xl:leading-5 lg:text-[14px] lg:font-semibold lg:leading-5">
                            {data.price}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Top trending men */}
            <div>
              <p className=" xl:text-2xl xl:leading-6 xl:tracking-tighter xl:font-semibold xl:mt-[50px] xl:mb-[50px] lg:text-[20px] lg:leading-6 lg:tracking-tighter lg:font-semibold lg:mb-[40px] lg:mt-[40px]">
                Top Trending Men
              </p>
              <div className=" xl:flex xl:gap-[30px] lg:flex lg:flex-wrap lg:gap-[30px]">
                {trendingmen.map((data, index) => (
                  <div
                    className="bg-white xl:border xl:border-transparent xl:rounded-xl lg:border lg:border-transparent lg:rounded-xl lg:p-[10px]"
                    key={index}
                  >
                    <img className="xl:mb-[21px] xl:max-w-[240px] lg:mb-[21px] lg:max-w-[210px]" src={data.url} />
                    <div className="flex">
                      <div className=" xl:flex xl:justify-between xl:max-w-[240px] xl:w-full xl:items-center lg:flex lg:justify-between lg:max-w-[210px] lg:w-full lg:items-center">
                        <div className=" flex gap-[12px] items-center justify-center">
                          <img
                            className="xl:max-h-[40px] xl:max-2-[40px] lg:max-h-[40px] lg:max-2-[40px] lg:border lg:rounded-full"
                            src={data.logo}
                          />

                          <div>
                            <p className="xl:text-[14px] xl:font-semibold xl:leading-5 xl:mb-[3px] lg:text-[14px] lg:font-semibold lg:leading-5 lg:mb-[3px]">
                              {data.brand}
                            </p>
                            <p className="xl:text-[12px] text-[#808191] xl:font-normal xl:leading-4 lg:text-[12px] lg:font-normal lg:leading-4 ">
                              {data.type}
                            </p>
                          </div>
                        </div>
                        <div className="">
                          <p className="xl:text-[14px] xl:font-semibold xl:leading-5 lg:text-[14px] lg:font-semibold lg:leading-5">
                            {data.price}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* woman man kids collection */}
            <div>
              <ul className="flex xl:gap-[80px] xl:mt-[80px] xl:ml-[30px] xl:mb-[60px] lg:gap-[80px] lg:mt-[80px] lg:ml-[30px] lg:mb-[60px]">
                <li>Women</li>
                <li>Men</li>
                <li>Kids</li>
              </ul>
            </div>
            {/* Active bar is not added yet */}
            <div>
              <div className=" flex flex-wrap xl:gap-[30px] lg:gap-[30px]">
                {collection.map((data, index) => (
                  <div
                    className="bg-white border border-transparent xl:rounded-xl lg:border lg:border-transparent lg:rounded-xl lg:p-[10px]"
                    key={index}
                  >
                    <img className="xl:mb-[21px] xl:max-w-[240px] lg:mb-[21px] lg:max-w-[210px] " src={data.url} />
                    <div className="flex">
                      <div className=" xl:flex xl:justify-between xl:max-w-[240px] xl:w-full xl:items-center lg:flex lg:justify-between lg:max-w-[210px] lg:w-full lg:items-center">
                        <div className=" flex gap-[12px] items-center justify-center">
                          <img
                            className="xl:max-h-[40px] xl:max-2-[40px] lg:max-h-[40px] lg:max-2-[40px] lg:border lg:rounded-full"
                            src={data.logo}
                          />

                          <div>
                            <p className="xl:text-[14px] xl:font-semibold xl:leading-5 xl:mb-[3px] lg:text-[14px] lg:font-semibold lg:leading-5 lg:mb-[3px]">
                              {data.brand}
                            </p>
                            <p className="xl:text-[12px] text-[#808191] xl:font-normal xl:leading-4 lg:text-[12px] lg:font-normal lg:leading-4">
                              {data.type}
                            </p>
                          </div>
                        </div>
                        <div className="">
                          <p className="xl:text-[14px] xl:font-semibold xl:leading-5 lg:text-[14px] lg:font-semibold lg:leading-5">
                            {data.price}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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
