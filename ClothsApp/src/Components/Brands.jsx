import React from "react";
import Nav from "./SubComponents/Nav";
import NewFeed from "./SubComponents/NameLogo";
import OnlinePeople from "./SubComponents/OnlinePeople";
import Groups from "./SubComponents/Groups";
import Controls from "./SubComponents/Controls";
import { Showing } from "../../util/logo";

const Brands = () => {
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
        {/* main body */}
        <div className="max-w-[1200px] w-[100%] border">
          <Nav />
          {/* divs after nav compnents */}
          <div className="border pl-[80px] pt-[47px] pb-[100px]">
            {/* title and brands logos */}
            <div className="flex gap-[100px] items-center">
              <div className="">
                <p className="text-[24px] text-[#808191] font-normal leading-6 tracking-tighter">
                  Salesbag
                </p>
                <p className="text-[48px] font-semibold leading-[56px]  tracking-tighter">
                  Brands
                </p>
              </div>
              {/* logos div */}
              <div className="  flex gap-[30px] items-center">
                {logos.map((data, index) => (
                  <div
                    id={index}
                    className="item-center max-h-[80px] max-w-[80px] rounded-full"
                  >
                    <img src={data.url} />
                  </div>
                ))}
              </div>
            </div>
            {/* Recomendation Banners */}
            <div className="mt-[50px] max-w-[1060px]">
              <div className="z-[-1]">
                <img src="/src/assets/Images/Banners/Khadi banner.png" />
              </div>
              <div className="flex justify-between">
                <div className="flex gap-[40px] items-center">
                  <div className="ml-[43px]">
                    <img
                      src="/src/assets/Images/Brands Logo/gulahmed.svg"
                      className=" mt-[-40px] max-h-[160px] max-w-[160px] "
                    />
                  </div>
                  <div className=" max-h-[50px] max-w-[400px] items-center">
                    <p className=" text-[32px] font-bold leading-6 tracking-tighter pb-[19px]">
                      Gul Ahmed
                    </p>
                    <p className=" text-[16px] font-normal leading-6 tracking-tighter">
                      Lorem ipsum dolor sit amet consectetur. Consectetur in
                      enim non duis pellentesque eget fermentum phasellus ut
                    </p>
                  </div>
                </div>
                {/* Stats */}
                <div className="flex gap-[60px] items-end text-end">
                  <div className=" text-left">
                    <p className=" text-[32px] font-bold leading-6 tracking-tighter">
                      162
                    </p>
                    <p className="text-[16px] font-normal leading-6 tracking-tighter mt-[10px]">
                      Products
                    </p>
                  </div>
                  <div className=" text-left">
                    <p className=" text-[32px] font-bold leading-6 tracking-tighter">
                      10+
                    </p>
                    <p className="text-[16px] font-normal leading-6 tracking-tighter mt-[10px]">
                      Catagories
                    </p>
                  </div>
                  <div className=" text-left">
                    <p className=" text-[32px] font-bold leading-6 tracking-tighter">
                      96k
                    </p>
                    <p className="text-[16px] font-normal leading-6 tracking-tighter mt-[10px]">
                      Reviews
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <ul className="flex gap-[80px] mt-[80px] ml-[30px] mb-[60px]">
                <li>Stitched</li>
                <li>Unstitched</li>
                <li>Ideas Pret</li>
                <li>Kaaj</li>
              </ul>
              {/*  Must add a activebar here */}
            </div>
            {/* collection */}
            <div>
              <div className=" grid grid-cols-4 gap-[30px]">
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
            <div className="text-center mt-[55px] max-w-[1045px]">
              <button className="  text-white bg-[#6151FF] text-[20px] font-semibold max-h-[56px] max-w-[163px] rounded-md pt-[14px] pb-[16px] pl-[32px] pr-[32px] tracking-tighter mb-[74px]">
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
