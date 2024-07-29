import { PlusSignInviteBtn } from "../../../util/logo";
import { Link } from "react-router-dom";

const InviteBtn = () => {
  return (
    <>
      <div className="flex justify-between items-center gap-[10px] cursor-pointer sm:px-[30px] bg-[#6151FF] sm:py-[10px] border border-transparent rounded-md text-white ">
        <PlusSignInviteBtn />
        <p className="font-normal leading-5">Invite</p>
      </div>
    </>
  );
};

export default InviteBtn;
