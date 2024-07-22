import React from "react";
import { ModalCloseBtn } from "../../util/logo";

const ModalNewChat = () => {
  return (
    <>
      <div
        className="flex items-center justify-center w-screen"
        style={"background-image: /src/assets/Images/Background/Modal-bg.png"}
      >
        <div>
          <div>
            <p>Start New Chat</p>
            <ModalCloseBtn />
          </div>
          <label className="">Group Name</label>
          <input className="" type="text" />
          <label className="">Add People*</label>
          <input className="" type="text" />
          <label className="">Invite People</label>
          <input className="" type="text" />
          <button>Create Group</button>
        </div>
      </div>
    </>
  );
};

export default ModalNewChat;
