import { AddBtn } from "../../../util/logo";
import PinnedItems from "../PinnedItems";

const PinnedItemGrid = () => {
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
    <div className="xl:gap-[30px] lg:grid-cols-4 md:gap-[20px] sm:grid sm:grid-cols-2 ">
      {collection.map((data, index) => (
        <div
          className="lg:static sm:relative bg-white border border-transparent md:rounded-xl  md:p-[8px] sm:w-fit"
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
  );
};

export default PinnedItemGrid;
