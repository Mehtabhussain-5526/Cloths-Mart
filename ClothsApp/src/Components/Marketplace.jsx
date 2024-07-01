import React from "react";
import Nav from "./SubComponents/Nav";
import NewFeed from "./SubComponents/NameLogo";
import OnlinePeople from "./SubComponents/OnlinePeople";
import Groups from "./SubComponents/Groups";
import Controls from "./SubComponents/Controls";

const Marketplace = () => {
  return (
    <>
      <div className="flex bg-[#F9FBFF]">
        <div className="max-w-[240px] w-[100%] pt-5 pl-5 pr-5">
          <NewFeed />
          <Controls/>
          <OnlinePeople />
          <Groups />
        </div>
        <div className="max-w-[1200px] w-[100%]">
          <Nav />
          <div>
            <p className="text-[24px]">Salesbag</p>
            <p className="text-[48px] tracking-tighter">Market Place</p>
          </div>
          <div className="flex">
            <img src="/src/assets/Images/Banners/Banner 1.png"/>
            <img src="/src/assets/Images/Banners/Banner 2.png"/>
            <img src=""/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Marketplace;
