import { AddBtn } from "../../../util/logo";

const GridSection = () => {
  const collection = [
    {
      url: "/src/assets/Images/Models/Women/woman1.png",
      logo: "/src/assets/Images/Brands Logo/sapphire-rounded.svg",
      brand: "Sapphire",
      type: "Unstiched",
      price: "PKR 3000",
      liked: "",
    },
    {
      url: "/src/assets/Images/Models/Women/woman2.png",
      logo: "/src/assets/Images/Brands Logo/sapphire-rounded.svg",
      brand: "Sapphire",
      type: "Unstiched",
      price: "PKR 3000",
      liked: "",
    },
    {
      url: "/src/assets/Images/Models/Women/woman3.png",
      logo: "/src/assets/Images/Brands Logo/sapphire-rounded.svg",
      brand: "Sapphire",
      type: "Unstiched",
      price: "PKR 3000",
      liked: "",
    },
    {
      url: "/src/assets/Images/Models/Women/woman4.png",
      logo: "/src/assets/Images/Brands Logo/sapphire-rounded.svg",
      brand: "Sapphire",
      type: "Unstiched",
      price: "PKR 3000",
      liked: "",
    },
    {
      url: "/src/assets/Images/Models/Women/woman1.png",
      logo: "/src/assets/Images/Brands Logo/sapphire-rounded.svg",
      brand: "Sapphire",
      type: "Unstiched",
      price: "PKR 3000",
      liked: "",
    },
    {
      url: "/src/assets/Images/Models/Women/woman2.png",
      logo: "/src/assets/Images/Brands Logo/sapphire-rounded.svg",
      brand: "Sapphire",
      type: "Unstiched",
      price: "PKR 3000",
      liked: "",
    },
    {
      url: "/src/assets/Images/Models/Women/woman3.png",
      logo: "/src/assets/Images/Brands Logo/sapphire-rounded.svg",
      brand: "Sapphire",
      type: "Unstiched",
      price: "PKR 3000",
      liked: "",
    },
    {
      url: "/src/assets/Images/Models/Women/woman4.png",
      logo: "/src/assets/Images/Brands Logo/sapphire-rounded.svg",
      brand: "Sapphire",
      type: "Unstiched",
      price: "PKR 3000",
      liked: "",
    },
  ];
  return (
    <div className="xl:gap-[30px] lg:grid-cols-4 mb:gap-[10px] grid sm:grid-cols-3 mb:grid-cols-2 md:px-0">
      {collection.map((data, index) => (
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
                  <p className="xl:text-[14px] xl:font-semibold xl:leading-5 xl:mb-[3px] lg:text-[12px] lg:font-semibold lg:leading-5 lg:mb-[3px] mb:text-[8px] mb:font-semibold mb:leading-[8px] mb:mb-[2px]">
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
  );
};

export default GridSection;
