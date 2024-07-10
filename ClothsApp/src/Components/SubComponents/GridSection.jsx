import React from "react";

const GridSection = () => {
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
    <div className=" xxl:gap-[30px]  lg:gap-[20px] lg:grid lg:grid-cols-4">
      {collection.map((data, index) => (
        <div
          className="bg-white border border-transparent xxl:rounded-xl lg:border lg:border-transparent lg:rounded-xl lg:p-[8px]"
          key={index}
        >
          <img
            className="xxl:mb-[21px] xxl:max-w-[220px] lg:mb-[16px] lg:min-w-[156px] "
            src={data.url}
          />
          <div className="flex">
            <div className=" xxl:flex xxl:justify-between xxl:max-w-[240px] xxl:w-full xxl:items-center lg:flex lg:justify-between lg:max-w-[210px] lg:w-full lg:items-center">
              <div className=" flex  items-center justify-center lg:gap-2">
                <img
                  className="xxl:max-h-[40px] xxl:max-2-[40px] lg:max-h-[40px] lg:max-w-[40px] lg:border lg:rounded-full"
                  src={data.logo}
                />

                <div>
                  <p className="xxl:text-[14px] xxl:font-semibold xxl:leading-5 xxl:mb-[3px] lg:text-[12px] lg:font-semibold lg:leading-5 lg:mb-[3px]">
                    {data.brand}
                  </p>
                  <p className="xxl:text-[12px] text-[#808191] xxl:font-normal xxl:leading-4 lg:text-[10px] lg:font-normal lg:leading-4">
                    {data.type}
                  </p>
                </div>
              </div>
              <div className="">
                <p className="xxl:text-[14px] xxl:font-semibold xxl:leading-5 lg:text-[10px] lg:font-semibold lg:leading-5 lg:tracking-tighter">
                  {data.price}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GridSection;
