import React from "react";

const OnlinePeople = () => {
  return (
    <>
      <div>
      <p className="text-[#808191] mt-[25px] font-normal  text-[11px] leading-5 lg:ml-[0px] lg:max-w-fit">Online People</p>
        <div className="flex gap-3  mt-[30px] items-center lg:ml-[19px] lg:max-w-fit" >
          <img className="h-[44px] w-[44px]" src="/src/assets/Images/Avatars/Leslie.png" /> <p>Leslie</p>
        </div>
        <div className="flex gap-3  mt-[20px] mb-[20px] items-center lg:ml-[19px] lg:max-w-fit" >
          <img className="h-[44px] w-[44px]" src="/src/assets/Images/Avatars/Lindsay.png" /> <p>Lindsay</p>
        </div>
        <div className="flex gap-3  mt-[20px] mb-[20px] items-center lg:ml-[19px] lg:max-w-fit" >
          <img className="h-[44px] w-[44px]" src="/src/assets/Images/Avatars/Henry.png" /> <p>Henry</p>
        </div>
        <div className="flex gap-3  mt-[20px] mb-[20px] items-center lg:ml-[19px] lg:max-w-fit" >
          <img className="h-[44px] w-[44px]" src="/src/assets/Images/Avatars/Michael.png" /> <p>Michael</p>
        </div>
        <div className="flex gap-3  mt-[20px] mb-[20px] items-center lg:ml-[19px] lg:max-w-fit" >
          <img className="h-[44px] w-[44px]" src="/src/assets/Images/Avatars/Dries.png" /> <p>Dries</p>
        </div>
        <div className="flex gap-3  mt-[20px] items-center lg:ml-[19px] lg:max-w-fit" >
          <img className="h-[44px] w-[44px]" src="/src/assets/Images/Avatars/Tom Cook.png" /> <p>Tom Cook</p>
        </div>
      </div>
    </>
  );
};

export default OnlinePeople;
