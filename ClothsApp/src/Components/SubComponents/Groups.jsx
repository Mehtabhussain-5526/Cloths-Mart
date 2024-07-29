import { GoneMemb, GthreeMemb, GtwoMemb } from "../../../util/logo";
import family from "../../assets/Images/Avatars/family-discussion.png";
import friends from "../../assets/Images/Avatars/Friends.png";
import business from "../../assets/Images/Avatars/business-chat.png";
const Groups = () => {
  return (
    <>
      <div>
        <p className="text-[#808191] mt-[25px] font-normal mb-[25px] text-[11px] leading-5 lg:ml-[0px] lg:max-w-fit">
          Group Chat
        </p>
        <div className="flex gap-4  lg:ml-[19px] md:ml-0 mb-[20px]  lg:max-w-fit">
          <img className="max-w-[44px] max-h-[44px] " src={family} />
          <div>
            <p className="font-normal lg:text-[14px] md:text-[12px]  leading-5 mb-[2px]">
              Family Discussion
            </p>
            <GoneMemb />
          </div>
        </div>
        <div className="flex gap-4  lg:ml-[19px] md:ml-0 mb-[20px]  lg:max-w-fit">
          <img className="max-w-[44px] max-h-[44px] " src={friends} />
          <div>
            <p className="font-normal lg:text-[14px] md:text-[12px] leading-5 mb-[2px]">
              Friends
            </p>
            <GtwoMemb />
          </div>
        </div>
        <div className="flex gap-4  lg:ml-[19px] md:ml-0 mb-[20px]  lg:max-w-fit">
          <img className="max-w-[44px] max-h-[44px] " src={business} />
          <div>
            <p className="font-normal lg:text-[14px] md:text-[12px] leading-5 mb-[2px]">
              Business Chat
            </p>
            <GthreeMemb />
          </div>
        </div>
      </div>
    </>
  );
};

export default Groups;
