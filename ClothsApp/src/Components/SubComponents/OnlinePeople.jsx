import React from "react";

const OnlinePeople = () => {
  return (
    <>
      <div>
      <p className="text-[#808191] mt-[25px] font-normal  text-[11px] leading-5">Online People</p>
        <div className="flex gap-3 pl-[15px] mt-[30px] mb-[10px] items-center" >
          <img className="h-[44px] w-[44px]" src="/src/assets/Images/Avatars/Leslie.png" /> <p>Leslie</p>{" "}
        </div>
        <div className="flex gap-3 pl-[19px] mt-[10px] mb-[10px] items-center" >
          <img className="h-[44px] w-[44px]" src="/src/assets/Images/Avatars/Lindsay.png" /> <p>Lindsay</p>{" "}
        </div>
        <div className="flex gap-3 pl-[19px] mt-[10px] mb-[10px] items-center" >
          <img className="h-[44px] w-[44px]" src="/src/assets/Images/Avatars/Henry.png" /> <p>Henry</p>{" "}
        </div>
        <div className="flex gap-3 pl-[19px] mt-[10px] mb-[10px] items-center" >
          <img className="h-[44px] w-[44px]" src="/src/assets/Images/Avatars/Michael.png" /> <p>Michael</p>{" "}
        </div>
        <div className="flex gap-3 pl-[19px] mt-[10px] mb-[10px] items-center" >
          <img className="h-[44px] w-[44px]" src="/src/assets/Images/Avatars/Dries.png" /> <p>Dries</p>{" "}
        </div>
        <div className="flex gap-3 pl-[19px] mt-[10px] mb-[10px] items-center" >
          <img className="h-[44px] w-[44px]" src="/src/assets/Images/Avatars/Tom Cook.png" /> <p>Tom Cook</p>{" "}
        </div>
      </div>
    </>
  );
};

export default OnlinePeople;
