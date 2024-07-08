import React from "react";
import Nav from "./SubComponents/Nav";
import NewFeed from "./SubComponents/NameLogo";
import OnlinePeople from "./SubComponents/OnlinePeople";
import Groups from "./SubComponents/Groups";
import Controls from "./SubComponents/Controls";
import {
  CommentIcon,
  LikeHallow,
  PurpleHeart,
  SendPost,
  ShareHallow,
  ThreeDotOption,
  XcloseBtn,
} from "../../util/logo";

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
                <img
                  className="max-w-[44px] max-h-[44px]"
                  src="/src/assets/Images/Avatars/Leslie.png"
                />
                <input
                  className="pl-[25px]  py-[18px] max-w-[900px] w-full"
                  placeholder="Write Something"
                />
              </div>
              <button className="px-[30px] bg-[#6151FF] py-[10px] border border-transparent rounded-md text-white my-[32px]">
                Post
              </button>

              {/* posts of proples */}
              <div className="bg-white pt-[32px] px-[25px] bordeer border-transparent rounded-md">
                <div className="flex justify-between mb-[35px]">
                  <div className="flex max-w-[280px] gap-[13px] items-center">
                    <div className="">
                      <img
                        className=""
                        src="/src/assets/Images/Avatars/Lindsay 65x65.png"
                      />
                    </div>
                    <div>
                      <p className="text-[#878787] leading-5 font-normal mb-[3px]">
                        Today at 1:30 pm
                      </p>
                      <p className="text-[24px] font-semibold leading-8 tracking-tighter">
                        Lindsay Walton
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-[17px] items-center max-w-p[60px]">
                    <ThreeDotOption /> <XcloseBtn />
                  </div>
                </div>
                <p className="font-medium leading-6 text-[14px] mb-[18px]">
                  Removed demands expense account in outward tedious do.&nbsp;
                  <span className="text-[#106FED] font-medium text-[14px] leading-6">
                    @Particular
                  </span>
                  &nbsp; way thoroughly unaffected projection.Removed demands
                  expense account in outward tedious do. Particular way
                  thoroughly unaffected projection.Removed demands expense
                  account in outward tedious do. Particular way thoroughly
                  unaffected projection.Removed demands expense account in
                  outward tedious do. &nbsp;
                  <span className="text-[#106FED] font-medium text-[14px] leading-6">
                    #Particular
                  </span>
                  &nbsp;
                  <sapn className="text-[#106FED] font-medium text-[14px] leading-6">
                    way#thoroughly
                  </sapn>
                  &nbsp; unaffected projection.
                </p>
                {/* Images of posts */}
                <div className="flex gap-[20px]">
                  <img
                    className="max-h-[312px] border border-transparent rounded-2xl"
                    src="/src/assets/Images/Models/Women/woman 19.png"
                  />
                  <div className="">
                    <img
                      className="mb-[20px] border border-transparent rounded-2xl"
                      src="/src/assets/Images/Models/Women/woman 20.png"
                    />
                    <div className="relative">
                      <img
                        className="border border-transparent rounded-2xl"
                        src="/src/assets/Images/Models/Women/woman under view all btn.png"
                      />
                      <img
                        className="absolute top-0"
                        src="/src/assets/Images/Models/Women/transp.png"
                      />
                      <div className="text-center absolute mx-auto max-w-[px] my-auto top-[45%] right-[45%]">
                        <button className="text-white font-medium leading-6 text-[14px] cursor-pointer">
                          View all
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Status */}
                <div className="flex justify-between items-center pt-[17px] pb-[24px]">
                  <div className="flex justify-between items-center">
                    <PurpleHeart />
                    <p className="ml-[13px]">Louis, Billy and 126 others</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <CommentIcon />
                    <p className="ml-[13px]">Comments &#40;12&#41; </p>
                  </div>
                </div>

                {/* like share send */}
                <div className="border border-x-transparent flex justify-between items-center pl-[25px] pb-[19px] pt-[16px] pr-[40px]">
                  <div className="flex items-center gap-[8px]">
                    <LikeHallow /> <p>Liked &#40;56&#41;</p>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <ShareHallow /> <p>Share &#40;3&#41;</p>
                  </div>
                  <div className="flex items-center gap-[12px]">
                    <SendPost /> <p>Send</p>
                  </div>
                </div>

                {/* COMMENTS */}
                <div className="mt-[24px]">
                  <div className="flex max-w-[884px] w-[100%] gap-[15px]">
                    <img
                      className="max-h-[44px] max-w-[44px] mt-[10px]"
                      src="/src/assets/Images/Avatars/Dries.png"
                    />
                    <div className="flex border border-transparent rounded-md bg-[#F0F0F0] pt-[18px] pr-[25px] pl-[35px] w-[100%] justify-between">
                      <div className="">
                        <p>Frances Guerrero</p>
                        <p className="max-w-[580px]">
                          Removed demands expense account in outward tedious do.
                          Particular way thoroughly unaffected projection.
                        </p>
                      </div>
                      <p>15hr</p>
                    </div>
                  </div>
                  <p className="ml-[130px] mt-[11px] mb-[15px]">
                    {" "}
                    <span>Like &#40;3&#41;</span>&nbsp; • &nbsp;&nbsp;&nbsp;
                    <span>Reply</span>&nbsp; • &nbsp;&nbsp;&nbsp;
                    <span>View 5 replies</span>{" "}
                  </p>
                  <div className="ml-[60px] flex max-w-[824px] w-[100%] gap-[15px]">
                    <img
                      className="max-h-[44px] max-w-[44px] mt-[10px]"
                      src="/src/assets/Images/Avatars/Dries.png"
                    />
                    <div className="flex border border-transparent rounded-md bg-[#F0F0F0] pt-[18px] pr-[25px] pl-[35px] w-[100%] justify-between">
                      <div className="">
                        <p>Frances Guerrero</p>
                        <p className="max-w-[580px]">
                          Removed demands expense account in outward tedious do.
                          Particular way thoroughly unaffected projection.
                        </p>
                      </div>
                      <p>15hr</p>
                    </div>
                  </div>
                  <p className="ml-[130px] mt-[11px] mb-[15px]">
                    {" "}
                    <span>Like &#40;3&#41;</span>&nbsp; • &nbsp;&nbsp;&nbsp;
                    <span>Reply</span>{" "}
                  </p>
                  <div className="ml-[60px] flex max-w-[824px] w-[100%] gap-[15px]">
                    <img
                      className="max-h-[44px] max-w-[44px] mt-[10px]"
                      src="/src/assets/Images/Avatars/Dries.png"
                    />
                    <div className="flex border border-transparent rounded-md bg-[#F0F0F0] pt-[18px] pr-[25px] pl-[35px] w-[100%] justify-between">
                      <div className="">
                        <p>Frances Guerrero</p>
                        <p className="max-w-[580px]">
                          Removed demands expense account in outward tedious do.
                          Particular way thoroughly unaffected projection.
                        </p>
                      </div>
                      <p>15hr</p>
                    </div>
                  </div>
                  <p className="ml-[130px] mt-[11px] mb-[15px]">
                    {" "}
                    <span>Like &#40;3&#41;</span>&nbsp; • &nbsp;&nbsp;&nbsp;
                    <span>Reply</span>{" "}
                  </p>
                  <div className="ml-[60px] flex max-w-[824px] w-[100%] gap-[15px]">
                    <img
                      className="max-h-[44px] max-w-[44px] mt-[10px]"
                      src="/src/assets/Images/Avatars/Dries.png"
                    />
                    <div className="flex border border-transparent rounded-md bg-[#F0F0F0] pt-[18px] pr-[35px] pl-[35px] justify-between">
                      <div className="">
                        <p>Frances Guerrero</p>
                        <p className="max-w-[580px]">Congratulations</p>
                        <img src="/src/assets/Emoji/Congrats.png" />
                      </div>
                    </div>
                  </div>
                  <p className="ml-[60px] mt-[25px]">... Load more comments</p>
                </div>
                {/* End of comments */}
              </div>
              {/* Clothing Blog */}
              <div className="bg-white pt-[40px]  bordeer border-transparent rounded-md mt-[25px]">
                <div className="flex justify-between px-[25px] mb-[20px]">
                  <div className="flex max-w-[280px] gap-[13px] items-center">
                    <div className="">
                      <img
                        className=""
                        src="/src/assets/Images/Avatars/Lindsay 65x65.png"
                      />
                    </div>
                    <div>
                      <p className="text-[#878787] leading-5 font-normal mb-[3px]">
                        Today at 1:30 pm
                      </p>
                      <p className="text-[24px] font-semibold leading-8 tracking-tighter">
                        Lindsay Walton
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-[17px] items-center max-w-p[60px]">
                    <ThreeDotOption /> <XcloseBtn />
                  </div>
                </div>
                <img src="/src/assets/Images/Banners/Banner 1.png" />
                <p className="pl-[30px] mt-[20px] mb-[5px]">Clothing Store</p>
                <p className="pl-[30px] pb-[23px]">
                  WHAT TO WEAR FOR VALENTINE’S DAY 2023: 40 OUTFIT IDEAS
                </p>
              </div>
              {/* khaadi post */}
              <div className="bg-white pt-[32px] px-[25px] bordeer border-transparent rounded-md mt-[20px]">
                <div className="flex justify-between mb-[35px]">
                  <div className="flex max-w-[280px] gap-[13px] items-center">
                    <div className="">
                      <img
                        className=""
                        src="/src/assets/Images/Avatars/Lindsay 65x65.png"
                      />
                    </div>
                    <div>
                      <p className="text-[#878787] leading-5 font-normal mb-[3px]">
                        Today at 1:30 pm
                      </p>
                      <p className="text-[24px] font-semibold leading-8 tracking-tighter">
                        Lindsay Walton
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-[17px] items-center max-w-p[60px]">
                    <ThreeDotOption /> <XcloseBtn />
                  </div>
                </div>
                <p className="font-medium leading-6 text-[14px] mb-[18px]">
                  Removed demands expense account in outward tedious do.&nbsp;
                  <span className="text-[#106FED] font-medium text-[14px] leading-6">
                    @Particular
                  </span>
                  &nbsp; way thoroughly unaffected projection.Removed demands
                  expense account in outward tedious do. Particular way
                  thoroughly unaffected projection.Removed demands expense
                  account in outward tedious do. Particular way thoroughly
                  unaffected projection.Removed demands expense account in
                  outward tedious do. &nbsp;
                  <span className="text-[#106FED] font-medium text-[14px] leading-6">
                    #Particular
                  </span>
                  &nbsp;
                  <sapn className="text-[#106FED] font-medium text-[14px] leading-6">
                    way#thoroughly
                  </sapn>
                  &nbsp; unaffected projection.
                </p>
                {/* Images of posts */}
                <div className="flex gap-[20px]">
                <img className="border border-transparent rounded-xl" src="/src/assets/Images/Banners/Banner 2.png" />
                </div>

                {/* COMMENTS */}
                <div className="mt-[24px]">
                  <div className="flex max-w-[884px] w-[100%] gap-[15px]">
                    <img
                      className="max-h-[44px] max-w-[44px] mt-[10px]"
                      src="/src/assets/Images/Avatars/Dries.png"
                    />
                    <div className="flex border border-transparent rounded-md bg-[#F0F0F0] pt-[18px] pr-[25px] pl-[35px] w-[100%] justify-between">
                      <div className="">
                        <p>Frances Guerrero</p>
                        <p className="max-w-[580px]">
                          Removed demands expense account in outward tedious do.
                          Particular way thoroughly unaffected projection.
                        </p>
                      </div>
                      <p>15hr</p>
                    </div>
                  </div>
                  <p className="ml-[130px] mt-[11px] mb-[15px]">
                    {" "}
                    <span>Like &#40;3&#41;</span>&nbsp; • &nbsp;&nbsp;&nbsp;
                    <span>Reply</span>&nbsp; • &nbsp;&nbsp;&nbsp;
                    <span>View 5 replies</span>{" "}
                  </p>
                  <div className="ml-[60px] flex max-w-[824px] w-[100%] gap-[15px]">
                    <img
                      className="max-h-[44px] max-w-[44px] mt-[10px]"
                      src="/src/assets/Images/Avatars/Dries.png"
                    />
                    <div className="flex border border-transparent rounded-md bg-[#F0F0F0] pt-[18px] pr-[25px] pl-[35px] w-[100%] justify-between">
                      <div className="">
                        <p>Frances Guerrero</p>
                        <p className="max-w-[580px]">
                          Removed demands expense account in outward tedious do.
                          Particular way thoroughly unaffected projection.
                        </p>
                      </div>
                      <p>15hr</p>
                    </div>
                  </div>
                  <p className="ml-[130px] mt-[11px] mb-[15px]">
                    {" "}
                    <span>Like &#40;3&#41;</span>&nbsp; • &nbsp;&nbsp;&nbsp;
                    <span>Reply</span>{" "}
                  </p>
                  <div className="ml-[60px] flex max-w-[824px] w-[100%] gap-[15px]">
                    <img
                      className="max-h-[44px] max-w-[44px] mt-[10px]"
                      src="/src/assets/Images/Avatars/Dries.png"
                    />
                    <div className="flex border border-transparent rounded-md bg-[#F0F0F0] pt-[18px] pr-[25px] pl-[35px] w-[100%] justify-between">
                      <div className="">
                        <p>Frances Guerrero</p>
                        <p className="max-w-[580px]">
                          Removed demands expense account in outward tedious do.
                          Particular way thoroughly unaffected projection.
                        </p>
                      </div>
                      <p>15hr</p>
                    </div>
                  </div>
                  <p className="ml-[130px] mt-[11px] mb-[15px]">
                    {" "}
                    <span>Like &#40;3&#41;</span>&nbsp; • &nbsp;&nbsp;&nbsp;
                    <span>Reply</span>{" "}
                  </p>
                  <div className="ml-[60px] flex max-w-[824px] w-[100%] gap-[15px]">
                    <img
                      className="max-h-[44px] max-w-[44px] mt-[10px]"
                      src="/src/assets/Images/Avatars/Dries.png"
                    />
                    <div className="flex border border-transparent rounded-md bg-[#F0F0F0] pt-[18px] pr-[35px] pl-[35px] justify-between">
                      <div className="">
                        <p>Frances Guerrero</p>
                        <p className="max-w-[580px]">Congratulations</p>
                        <img src="/src/assets/Emoji/Congrats.png" />
                      </div>
                    </div>
                  </div>
                  <p className="ml-[60px] mt-[25px]">... Load more comments</p>
                </div>
                {/* End of comments */}
              </div>

              {/* Clothing store */}
              <div className="bg-white pt-[32px] px-[25px] bordeer border-transparent rounded-md mt-[20px]">
              <div className="flex justify-between px-[25px] mb-[20px]">
                  <div className="flex max-w-[280px] gap-[13px] items-center">
                    <div className="">
                      <img
                        className=""
                        src="/src/assets/Images/Avatars/Lindsay 65x65.png"
                      />
                    </div>
                    <div>
                      <p className="text-[#878787] leading-5 font-normal mb-[3px]">
                        Today at 1:30 pm
                      </p>
                      <p className="text-[24px] font-semibold leading-8 tracking-tighter">
                        Lindsay Walton
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-[17px] items-center max-w-p[60px]">
                    <ThreeDotOption /> <XcloseBtn />
                  </div>
                </div>

                <div className="flex ml-[]">
                  <div> <img src="/src/assets/Images/Models/Women/woman 23.png" /> <div className="flex mt-[20px] gap-[20px]" > <p>Needle Craft Embroidered Shirt WGK-KDW</p> <p>PKR 3890</p> </div> </div>
                  <div> <img src="/src/assets/Images/Models/Women/woman 23.png" /> <div className="flex mt-[20px] gap-[20px]" > <p>Needle Craft Embroidered Shirt WGK-KDW</p> <p>PKR 3890</p> </div> </div>
                  <div> <img src="/src/assets/Images/Models/Women/woman 23.png" /> <div className="flex mt-[20px] gap-[20px]" > <p>Needle Craft Embroidered Shirt WGK-KDW</p> <p>PKR 3890</p> </div> </div>
                </div>
                
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
