import React from "react";
import Nav from "./SubComponents/Nav";
import NewFeed from "./SubComponents/NameLogo";
import OnlinePeople from "./SubComponents/OnlinePeople";
import Groups from "./SubComponents/Groups";
import Controls from "./SubComponents/Controls";

const MarketPlaceChat = () => {
  const questions = [
    {
      statement: "Ten questions you should answer truthfully",
      time: "2hr",
    },
    {
      statement: "Five unbelievable facts about money",
      time: "3hr",
    },
    {
      statement: "Best Pinterest Boards for learning about business",
      time: "4hr",
    },
    {
      statement: "Skills that you can learn from business",
      time: "6hr",
    },
  ];
  return (
    <>
      <div className="flex bg-[#F9FBFF]">
        <div className="max-w-[240px] w-[100%] pt-5 pl-5 pr-5">
          <NewFeed />
          <Controls />
          <OnlinePeople />
          <Groups />
        </div>
        {/* main body */}
        <div className="max-w-[1200px] w-[100%] border">
          <Nav />
          {/* main dive and aside div */}
          <div className="flex border">
            {/* main div */}
            <div className="border pt-[30px] pl-[30px] pr-[30px] max-w-[1000px] w-full">
              {/* create posts div */}
              <div className=" flex gap-[22px] items-center">
                <img className="max-w-[44px] max-h-[44px]" src="/src/assets/Images/Avatars/Leslie.png"/>
                <input className="pl-[25px]  py-[18px] max-w-[830px] w-full" placeholder="Write Something"/>
              </div>
              <button className="px-[30px] bg-[#6151FF] py-[10px] border border-transparent rounded-md text-white my-[32px]">Post</button>
              <div className="bg-white">

              </div>
            </div>
            
            {/* Side div */}
            <div className="max-w-[180px0] pl-[15px] pr-[15px]">
              <div>
                <img
                  className=" max-w-[170px] mt-[50px]"
                  src="/src/assets/Images/Banners/ideas vertical.png"
                />
              </div>
              <div className="max-w-[150px] mt-[30px]">
                <p className="leading-[19px] font-bold mb-5">Today's news</p>
                {questions.map((data, index) => (
                  <div id={index} className="">
                    <p className="leading-[19px] font-medium text-[14px]">
                      {data.statement}
                    </p>
                    <p className="leading-[19px] font-medium text-[14px] text-[#595959] mb-5">
                      {data.time}
                    </p>
                  </div>
                ))}
                <p className="text-[#595959] text-[14px] leading-6">
                  ... View all latest news
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketPlaceChat;
