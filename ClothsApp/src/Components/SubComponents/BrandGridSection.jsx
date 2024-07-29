import woman7 from "../../assets/Images/Models/Women/woman7.png";
import woman8 from "../../assets/Images/Models/Women/woman8.png";
import woman9 from "../../assets/Images/Models/Women/woman9.png";
import woman10 from "../../assets/Images/Models/Women/woman10.png";
import woman11 from "../../assets/Images/Models/Women/woman11.png";
import woman12 from "../../assets/Images/Models/Women/woman12.png";
import woman13 from "../../assets/Images/Models/Women/woman13.png";
import woman14 from "../../assets/Images/Models/Women/woman14.png";
import woman15 from "../../assets/Images/Models/Women/woman15.png";
import woman16 from "../../assets/Images/Models/Women/woman16.png";
import woman17 from "../../assets/Images/Models/Women/woman17.png";
import woman18 from "../../assets/Images/Models/Women/woman18.png";

const BrandGridSection = () => {
  const collection = [
    {
      url: woman7,
      intro: "Needle Craft Embroidered Shirt WGK-KDW",
      brand: "Sapphire",
      type: "Unstiched",
      price: "PKR 3000",
      liked: "",
    },
    {
      url: woman8,
      intro: "Needle Craft Embroidered Shirt WGK-KDW",
      brand: "Sapphire",
      type: "Unstiched",
      price: "PKR 3000",
      liked: "",
    },
    {
      url: woman9,
      intro: "Needle Craft Embroidered Shirt WGK-KDW",
      brand: "Sapphire",
      type: "Unstiched",
      price: "PKR 3000",
      liked: "",
    },
    {
      url: woman10,
      intro: "Needle Craft Embroidered Shirt WGK-KDW",
      brand: "Sapphire",
      type: "Unstiched",
      price: "PKR 3000",
      liked: "",
    },
    {
      url: woman11,
      intro: "Needle Craft Embroidered Shirt WGK-KDW",
      brand: "Sapphire",
      type: "Unstiched",
      price: "PKR 3000",
      liked: "",
    },
    {
      url: woman12,
      intro: "Needle Craft Embroidered Shirt WGK-KDW",
      brand: "Sapphire",
      type: "Unstiched",
      price: "PKR 3000",
      liked: "",
    },
    {
      url: woman13,
      intro: "Needle Craft Embroidered Shirt WGK-KDW",
      brand: "Sapphire",
      type: "Unstiched",
      price: "PKR 3000",
      liked: "",
    },
    {
      url: woman14,
      intro: "Needle Craft Embroidered Shirt WGK-KDW",
      brand: "Sapphire",
      type: "Unstiched",
      price: "PKR 3000",
      liked: "",
    },
    {
      url: woman15,
      intro: "Needle Craft Embroidered Shirt WGK-KDW",
      brand: "Sapphire",
      type: "Unstiched",
      price: "PKR 3000",
      liked: "",
    },
    {
      url: woman16,
      intro: "Needle Craft Embroidered Shirt WGK-KDW",
      brand: "Sapphire",
      type: "Unstiched",
      price: "PKR 3000",
      liked: "",
    },
    {
      url: woman17,
      intro: "Needle Craft Embroidered Shirt WGK-KDW",
      brand: "Sapphire",
      type: "Unstiched",
      price: "PKR 3000",
      liked: "",
    },
    {
      url: woman18,
      intro: "Needle Craft Embroidered Shirt WGK-KDW",
      brand: "Sapphire",
      type: "Unstiched",
      price: "PKR 3000",
      liked: "",
    },
    {
      url: woman11,
      intro: "Needle Craft Embroidered Shirt WGK-KDW",
      brand: "Sapphire",
      type: "Unstiched",
      price: "PKR 3000",
      liked: "",
    },
    {
      url: woman12,
      intro: "Needle Craft Embroidered Shirt WGK-KDW",
      brand: "Sapphire",
      type: "Unstiched",
      price: "PKR 3000",
      liked: "",
    },
    {
      url: woman13,
      intro: "Needle Craft Embroidered Shirt WGK-KDW",
      brand: "Sapphire",
      type: "Unstiched",
      price: "PKR 3000",
      liked: "",
    },
    {
      url: woman14,
      intro: "Needle Craft Embroidered Shirt WGK-KDW",
      brand: "Sapphire",
      type: "Unstiched",
      price: "PKR 3000",
      liked: "",
    },
  ];
  return (
    <div className="xl:gap-[30px] lg:grid-cols-4 sm:grid-cols-3 mb:gap-[18px] grid mb:grid-cols-2 ">
      {collection.map((data, index) => (
        <div
          className="lg:static bg-white border border-transparent mb:rounded-xl lg:p-[15px]  mb:p-[8px] mb:w-fit"
          key={index}
        >
          <img
            className="xl:mb-[21px] mb:mb-[16px] lg:min-w-[156px]"
            src={data.url}
          />
          <div className="flex w-full">
            <div className=" xl:flex-row xl:justify-between xl:max-w-[240px] xl:w-full xl:items-center lg:flex lg:justify-between lg:max-w-[210px] lg:w-full lg:items-center mb:flex-col md:gap-[19px]">
              <div className="">
                <p className="xl:text-[14px] mb:text-[12px]  mb:font-semibold mb:leading-5 sm:tracking-tighter  mb:mb-[19px] ">
                  {data.intro}
                </p>
              </div>

              <div className=" lg:flex-none lg:py-0 lg:max-w-none xl:w-fit mb:w-full">
                <p className="text-right  xl:text-[14px] mb:text-[14px]  mb:font-semibold mb:leading-5 mb:tracking-tighter mb:mb-[4px]">
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

export default BrandGridSection;
