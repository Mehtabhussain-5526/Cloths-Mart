import { GoneMemb, GthreeMemb, GtwoMemb } from "../../../util/logo";
const Groups = () => {
  return (
    <>
      <div>
        <p className="text-[#808191] mt-[25px] font-normal mb-[25px] text-[11px] leading-5 lg:ml-[20px] lg:max-w-fit">
          Group Chat
        </p>
        <div className="flex gap-3  lg:ml-[35px] md:ml-0  mb-[20px]  lg:max-w-fit">
          <img
            className="max-w-[44px] max-h-[44px] "
            src="/src/assets/Images/Avatars/Family Discussion.png"
          />
          <div>
            <p className="font-normal lg:text-[14px] md:text-[12px]  leading-5">
              Family Discussion
            </p>
            <GoneMemb />
          </div>
        </div>
        <div className="flex gap-3  lg:ml-[35px] md:ml-0  mb-[20px]  lg:max-w-fit">
          <img
            className="max-w-[44px] max-h-[44px] "
            src="/src/assets/Images/Avatars/Friends.png"
          />
          <div>
            <p className="font-normal lg:text-[14px] md:text-[12px] leading-5">
              Friends
            </p>
            <GtwoMemb />
          </div>
        </div>
        <div className="flex gap-3  lg:ml-[35px] md:ml-0  mb-[20px]  lg:max-w-fit">
          <img
            className="max-w-[44px] max-h-[44px] "
            src="/src/assets/Images/Avatars/Business Chat.png"
          />
          <div>
            <p className="font-normal lg:text-[14px] md:text-[12px] leading-5">
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
