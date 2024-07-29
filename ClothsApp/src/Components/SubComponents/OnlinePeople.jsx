import React from "react";
import henry from "../../assets/Images/Avatars/Henry.png";
import leslie from "../../assets/Images/Avatars/Leslie.png";
import lindsay from "../../assets/Images/Avatars/Lindsay.png";
import michael from "../../assets/Images/Avatars/Michael.png";
import tomcook from "../../assets/Images/Avatars/tom-cook.png";
import dries from "../../assets/Images/Avatars/Dries.png";

const OnlinePeople = () => {
  return (
    <>
      <div>
        <p className="text-[#808191] mt-[25px] font-normal  text-[11px] leading-5 lg:ml-[0px] lg:max-w-fit">
          Online People
        </p>
        <div className="flex gap-3  mt-[30px] items-center lg:ml-[19px] lg:max-w-fit">
          <img className="h-[44px] w-[44px]" src={leslie} /> <p>Leslie</p>
        </div>
        <div className="flex gap-3  mt-[20px] mb-[20px] items-center lg:ml-[19px] lg:max-w-fit">
          <img className="h-[44px] w-[44px]" src={lindsay} /> <p>Lindsay</p>
        </div>
        <div className="flex gap-3  mt-[20px] mb-[20px] items-center lg:ml-[19px] lg:max-w-fit">
          <img className="h-[44px] w-[44px]" src={henry} /> <p>Henry</p>
        </div>
        <div className="flex gap-3  mt-[20px] mb-[20px] items-center lg:ml-[19px] lg:max-w-fit">
          <img className="h-[44px] w-[44px]" src={michael} /> <p>Michael</p>
        </div>
        <div className="flex gap-3  mt-[20px] mb-[20px] items-center lg:ml-[19px] lg:max-w-fit">
          <img className="h-[44px] w-[44px]" src={dries} /> <p>Dries</p>
        </div>
        <div className="flex gap-3  mt-[20px] items-center lg:ml-[19px] lg:max-w-fit">
          <img className="h-[44px] w-[44px]" src={tomcook} /> <p>Tom Cook</p>
        </div>
      </div>
    </>
  );
};

export default OnlinePeople;
