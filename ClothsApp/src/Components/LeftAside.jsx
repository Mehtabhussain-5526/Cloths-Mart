import React from "react";
import NewFeed from "./SubComponents/NameLogo";
import OnlinePeople from "./SubComponents/OnlinePeople";
import Groups from "./SubComponents/Groups";
import Controls from "./SubComponents/Controls";

const LefttAside = () => {
  return (
    <>
      <div className=" xl:pt-5 xl:pl-5 xl:pr-5 xl:max-w-[240px] xl:w-[100%] lg:max-w-[224px] lg:w-full lg:border">
        <NewFeed />
        <Controls />
        <OnlinePeople />
        <Groups />
      </div>
    </>
  );
};

export default LefttAside;
