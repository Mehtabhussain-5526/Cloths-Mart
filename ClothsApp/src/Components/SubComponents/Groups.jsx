import React from "react";
import { GoneMemb, GthreeMemb, GtwoMemb } from "../../../util/logo";

const Groups = () => {
  return (
    <>
      <div>
      <p>Group Chat</p>
        <div className="flex gap-3" >
          <img src="/src/assets/Images/Avatars/Family Discussion.png" />
          <div>
            <p> Group 1</p>
            <GoneMemb />
          </div>
        </div>
        <div className="flex gap-3" >
          <img src="/src/assets/Images/Avatars/Family Discussion.png" />
          <div>
            <p> Group 1</p>
            <GtwoMemb />
          </div>
        </div>
        <div className="flex gap-3" >
          <img src="/src/assets/Images/Avatars/Family Discussion.png" />
          <div>
            <p> Group 1</p>
            <GthreeMemb />
          </div>
        </div>
      </div>
    </>
  );
};

export default Groups;
