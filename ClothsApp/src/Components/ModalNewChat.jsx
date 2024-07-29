import React from "react";
import { ModalCloseBtn } from "../../util/logo";

const ModalNewChat = () => {
  return (
    <>
      <div className="">
        <div className="max-w-[904px] mx-auto">
          <div className="flex justify-between ">
            <p>Start New Chat</p>
            <ModalCloseBtn />
          </div>
          <label className="max-w-[818px] w-full block text-[20px] font-normal leading-6 tracking-tighter mb-[17px]">Group Name</label>
          <input className="h-[56px] pl-[25px] max-w-[818px] w-full block bg-[#F0F0F0] border-[1px] border-[#D0D0D0] rounded-md outline-none" type="text" />
          <label className="max-w-[818px] w-full block text-[20px] font-normal leading-6 tracking-tighter mb-[17px]">Add People*</label>
          <input className="h-[56px] pl-[25px] max-w-[818px] w-full block bg-[#F0F0F0] border-[1px] border-[#D0D0D0] rounded-md outline-none" type="text" />
          <label className="max-w-[818px] w-full block text-[20px] font-normal leading-6 tracking-tighter mb-[17px]">Invite People</label>
          <input className="h-[56px] pl-[25px] max-w-[818px] w-full block bg-[#F0F0F0] border-[1px] border-[#D0D0D0] rounded-md outline-none" type="text" />
          <button>Create Group</button>
        </div>
      </div>
    </>
  );
};

export default ModalNewChat;
