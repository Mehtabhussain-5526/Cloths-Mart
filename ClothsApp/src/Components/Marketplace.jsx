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
      <div className="flex bg-[#F9FBFF]">
        <div className="max-w-[240px] w-[100%] pt-5 pl-5 pr-5">
          <NewFeed />
          <Controls />
          <OnlinePeople />
          <Groups />
        </div>
        <div className="max-w-[1200px] w-[100%] border">
          <Nav />
          <div className="border pl-[80px] pt-[47px]">
            <div className="mb-[47px]">
              <p className="text-[24px] text-[#808191] font-normal leading-6 tracking-tighter">
                Salesbag
              </p>
              <p className="text-[48px] font-semibold leading-[56px]  tracking-tighter">
                Market Place
              </p>
            </div>
            <div className="flex overflow-x-hidden gap-[30px] ">
              <img
                className="w-[100%] max-w-[500px] h-[240px]  border border-transparent rounded-2xl"
                src="/src/assets/Images/Banners/Ideas banner purple.png"
              />
              <img
                className="w-[100%] max-w-[500px] h-[240px]  border border-transparent rounded-2xl"
                src="/src/assets/Images/Banners/Ideas banner green.png"
              />
              <img
                className="w-[100%] max-w-[500px] h-[240px]  border border-transparent rounded-2xl"
                src="/src/assets/Images/Banners/Ideas banner purple.png"
              />
            </div>
            <div className="mt-[32px] mb-[50px]">
              <Showing />
            </div>
            {/* Top trending women */}
            <div>
              <p className=" text-2xl leading-6 tracking-tighter font-semibold mb-[50px]">
                Top Trending Women
              </p>
              <div className=" flex gap-[30px]">
                {trending.map((data, index) => (
                  <div
                    className="bg-white border border-transparent rounded-xl"
                    key={index}
                  >
                    <img className="mb-[21px] max-w-[240px]" src={data.url} />
                    <div className="flex">
                      <div className="border rounded-full cursor-pointer"></div>
                      <div className=" flex justify-between max-w-[240px] w-full items-center">
                        <div className=" flex gap-[12px]">
                          <img
                            className="max-h-[40px] max-2-[40px]"
                            src={data.logo}
                          />

                          <div>
                            <p className="text-[14px] font-semibold leading-5 mb-[3px]">
                              {data.brand}
                            </p>
                            <p className="text-[12px] text-[#808191] font-normal leading-4 ">
                              {data.type}
                            </p>
                          </div>
                        </div>
                        <div className="">
                          <p className="text-[14px] font-semibold leading-5 ">
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
              <p className=" text-2xl leading-6 tracking-tighter font-semibold mt-[50px] mb-[50px]">
                Top Trending Men
              </p>
              {/* Grid section */}
              <div className=" flex gap-[30px]">
                {trendingmen.map((data, index) => (
                  <div
                    className="bg-white border border-transparent rounded-xl"
                    key={index}
                  >
                    <img className="mb-[21px] max-w-[240px]" src={data.url} />
                    <div className="flex">
                      <div className="border rounded-full cursor-pointer"></div>
                      <div className=" flex justify-between max-w-[240px] w-full items-center">
                        <div className=" flex gap-[12px]">
                          <img
                            className="max-h-[40px] max-2-[40px]"
                            src={data.logo}
                          />

                          <div>
                            <p className="text-[14px] font-semibold leading-5 mb-[3px]">
                              {data.brand}
                            </p>
                            <p className="text-[12px] text-[#808191] font-normal leading-4 ">
                              {data.type}
                            </p>
                          </div>
                        </div>
                        <div className="">
                          <p className="text-[14px] font-semibold leading-5 ">
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
              <ul className="flex gap-[80px] mt-[80px] ml-[30px] mb-[60px]">
                <li>Women</li>
                <li>Men</li>
                <li>Kids</li>
              </ul>
            </div>
            {/* Active bar is not added yet */}
            <div>
              <div className=" flex gap-[30px] flex-wrap">
                {collection.map((data, index) => (
                  <div
                    className="bg-white border border-transparent rounded-xl"
                    key={index}
                  >
                    <img className="mb-[21px] max-w-[240px]" src={data.url} />
                    <div className="flex">
                      <div className="border rounded-full cursor-pointer"></div>
                      <div className=" flex justify-between max-w-[240px] w-full items-center">
                        <div className=" flex gap-[12px]">
                          <img
                            className="max-h-[40px] max-2-[40px]"
                            src={data.logo}
                          />

                          <div>
                            <p className="text-[14px] font-semibold leading-5 mb-[3px]">
                              {data.brand}
                            </p>
                            <p className="text-[12px] text-[#808191] font-normal leading-4 ">
                              {data.type}
                            </p>
                          </div>
                        </div>
                        <div className="">
                          <p className="text-[14px] font-semibold leading-5 ">
                            {data.price}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Marketplace;
