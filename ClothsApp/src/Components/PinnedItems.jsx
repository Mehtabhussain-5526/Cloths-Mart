import React from "react";
import Nav from "./SubComponents/Nav";
import NewFeed from "./SubComponents/NameLogo";
import OnlinePeople from "./SubComponents/OnlinePeople";
import Groups from "./SubComponents/Groups";
import Controls from "./SubComponents/Controls";
const PinnedItems = () => {
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
            {/* title and selction btn */}
            <div className="flex justify-between items-center mb-[50px] max-w-[1000px]">
              <div className="">
                <p className="text-[24px] text-[#808191] font-normal leading-6 tracking-tighter">
                  Salesbag
                </p>
                <p className="text-[48px] font-semibold leading-[56px]  tracking-tighter">
                  Pinned Items
                </p>
              </div>
              <div className="items-end">
                <ul>
                  <li className="font-normal leading-5 tracking-tighter mt-[50px] hover:text-[#6151FF] underline">
                    Select pinned items
                  </li>
                </ul>
              </div>
            </div>
            {/* collection */}
            <div className=" max-w-[1000px]">
              <div className=" grid grid-cols-4 gap-[30px]">
                {collection.map((data, index) => (
                  <div
                    className="bg-white border border-transparent rounded-xl p-[10px] max-w-[250px] w-[100%] "
                    key={index}
                  >
                    <img className="mb-[21px] max-w-[205px]" src={data.url} />
                    <div className="flex">
                      <div className="border border-transparent rounded-full cursor-pointer"></div>
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

export default PinnedItems;
