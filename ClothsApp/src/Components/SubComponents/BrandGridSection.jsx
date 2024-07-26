const BrandGridSection = () => {
  const collection = [
    {
      url: "/src/assets/Images/Models/Women/woman 7.png",
      intro: "Needle Craft Embroidered Shirt WGK-KDW",
      brand: "Sapphire",
      type: "Unstiched",
      price: "PKR 3000",
      liked: "",
    },
    {
      url: "/src/assets/Images/Models/Women/woman 8.png",
      intro: "Needle Craft Embroidered Shirt WGK-KDW",
      brand: "Sapphire",
      type: "Unstiched",
      price: "PKR 3000",
      liked: "",
    },
    {
      url: "/src/assets/Images/Models/Women/woman 9.png",
      intro: "Needle Craft Embroidered Shirt WGK-KDW",
      brand: "Sapphire",
      type: "Unstiched",
      price: "PKR 3000",
      liked: "",
    },
    {
      url: "/src/assets/Images/Models/Women/woman 10.png",
      intro: "Needle Craft Embroidered Shirt WGK-KDW",
      brand: "Sapphire",
      type: "Unstiched",
      price: "PKR 3000",
      liked: "",
    },
    {
      url: "/src/assets/Images/Models/Women/woman 11.png",
      intro: "Needle Craft Embroidered Shirt WGK-KDW",
      brand: "Sapphire",
      type: "Unstiched",
      price: "PKR 3000",
      liked: "",
    },
    {
      url: "/src/assets/Images/Models/Women/woman 12.png",
      intro: "Needle Craft Embroidered Shirt WGK-KDW",
      brand: "Sapphire",
      type: "Unstiched",
      price: "PKR 3000",
      liked: "",
    },
    {
      url: "/src/assets/Images/Models/Women/woman 13.png",
      intro: "Needle Craft Embroidered Shirt WGK-KDW",
      brand: "Sapphire",
      type: "Unstiched",
      price: "PKR 3000",
      liked: "",
    },
    {
      url: "/src/assets/Images/Models/Women/woman 14.png",
      intro: "Needle Craft Embroidered Shirt WGK-KDW",
      brand: "Sapphire",
      type: "Unstiched",
      price: "PKR 3000",
      liked: "",
    },
    {
      url: "/src/assets/Images/Models/Women/woman 15.png",
      intro: "Needle Craft Embroidered Shirt WGK-KDW",
      brand: "Sapphire",
      type: "Unstiched",
      price: "PKR 3000",
      liked: "",
    },
    {
      url: "/src/assets/Images/Models/Women/woman 16.png",
      intro: "Needle Craft Embroidered Shirt WGK-KDW",
      brand: "Sapphire",
      type: "Unstiched",
      price: "PKR 3000",
      liked: "",
    },
    {
      url: "/src/assets/Images/Models/Women/woman 17.png",
      intro: "Needle Craft Embroidered Shirt WGK-KDW",
      brand: "Sapphire",
      type: "Unstiched",
      price: "PKR 3000",
      liked: "",
    },
    {
      url: "/src/assets/Images/Models/Women/woman 18.png",
      intro: "Needle Craft Embroidered Shirt WGK-KDW",
      brand: "Sapphire",
      type: "Unstiched",
      price: "PKR 3000",
      liked: "",
    },
    {
      url: "/src/assets/Images/Models/Women/woman 11.png",
      intro: "Needle Craft Embroidered Shirt WGK-KDW",
      brand: "Sapphire",
      type: "Unstiched",
      price: "PKR 3000",
      liked: "",
    },
    {
      url: "/src/assets/Images/Models/Women/woman 12.png",
      intro: "Needle Craft Embroidered Shirt WGK-KDW",
      brand: "Sapphire",
      type: "Unstiched",
      price: "PKR 3000",
      liked: "",
    },
    {
      url: "/src/assets/Images/Models/Women/woman 13.png",
      intro: "Needle Craft Embroidered Shirt WGK-KDW",
      brand: "Sapphire",
      type: "Unstiched",
      price: "PKR 3000",
      liked: "",
    },
    {
      url: "/src/assets/Images/Models/Women/woman 14.png",
      intro: "Needle Craft Embroidered Shirt WGK-KDW",
      brand: "Sapphire",
      type: "Unstiched",
      price: "PKR 3000",
      liked: "",
    },
  ];
  return (
    <div className="xl:gap-[30px] lg:grid-cols-4 sm:grid-cols-3 mb:gap-[20px] grid mb:grid-cols-2 ">
      {collection.map((data, index) => (
        <div
          className="lg:static bg-white border border-transparent mb:rounded-xl  mb:p-[8px] mb:w-fit"
          key={index}
        >
          <img
            className="xl:mb-[21px] mb:mb-[16px] lg:min-w-[156px]"
            src={data.url}
          />
          <div className="flex w-full">
            <div className=" xl:flex-row xl:justify-between xl:max-w-[240px] xl:w-full xl:items-center lg:flex lg:justify-between lg:max-w-[210px] lg:w-full lg:items-center mb:flex-col md:gap-[19px]">
              <div className="">
                <p className="xl:text-[14px] mb:text-[12px]  mb:font-semibold mb:leading-5 mb:tracking-tighter ">
                  {data.intro}
                </p>
              </div>

              <div className=" lg:flex-none lg:py-0 lg:max-w-none xl:w-fit mb:w-full">
                <p className="text-right  xl:text-[14px] mb:text-[14px]  mb:font-semibold mb:leading-5 mb:tracking-tighter ">
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
