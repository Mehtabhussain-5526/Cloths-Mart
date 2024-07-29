import React from "react";

const OnlinePeople = () => {
  return (
    <>
      <div>
        <p className="text-[#808191] mt-[25px] font-normal  text-[11px] leading-5 lg:ml-[0px] lg:max-w-fit">
          Online People
        </p>
        <div className="flex gap-3  mt-[30px] items-center lg:ml-[19px] lg:max-w-fit">
          <img
            className="h-[44px] w-[44px]"
            src="/src/assets/Images/Avatars/leslie.png"
          />{" "}
          <p>Leslie</p>
        </div>
        <div className="flex gap-3  mt-[20px] mb-[20px] items-center lg:ml-[19px] lg:max-w-fit">
          <img
            className="h-[44px] w-[44px]"
            src="/src/assets/Images/Avatars/lindsay.png"
          />{" "}
          <p>Lindsay</p>
        </div>
        <div className="flex gap-3  mt-[20px] mb-[20px] items-center lg:ml-[19px] lg:max-w-fit">
          <img
            className="h-[44px] w-[44px]"
            src="/src/assets/Images/Avatars/henry.png"
          />{" "}
          <p>Henry</p>
        </div>
        <div className="flex gap-3  mt-[20px] mb-[20px] items-center lg:ml-[19px] lg:max-w-fit">
          <img
            className="h-[44px] w-[44px]"
            src="/src/assets/Images/Avatars/michael.png"
          />{" "}
          <p>Michael</p>
        </div>
        <div className="flex gap-3  mt-[20px] mb-[20px] items-center lg:ml-[19px] lg:max-w-fit">
          <img
            className="h-[44px] w-[44px]"
            src="/src/assets/Images/Avatars/dries.png"
          />{" "}
          <p>Dries</p>
        </div>
        <div className="flex gap-3  mt-[20px] items-center lg:ml-[19px] lg:max-w-fit">
          <img
            className="h-[44px] w-[44px]"
            src="/src/assets/Images/Avatars/tom-cook.png"
          />{" "}
          <p>Tom Cook</p>
        </div>
      </div>
    </>
  );
};

export default OnlinePeople;
