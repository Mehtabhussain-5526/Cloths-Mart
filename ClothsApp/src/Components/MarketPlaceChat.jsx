import React from "react";
import Nav from "./SubComponents/Nav";
import {
  CommentIcon,
  LikeHallow,
  PurpleHeart,
  SendPost,
  ShareHallow,
  ThreeDotOption,
  XcloseBtn,
} from "../../util/logo";
import LeftAside from "./LeftAside";
import RightAside from "./SubComponents/RightAside";

const MarketPlaceChat = () => {
  return (
    <>
      <div className="flex bg-[#F9FBFF]">
        <LeftAside />
        {/* main body */}
        <div className="xxl:max-w-[1200px] w-[100%] border">
          <Nav />
          {/* main dive and aside div */}
          <div className="border xl:flex lg:border-b-transparent">
            {/* main div */}
            <div className="border border-b-transparent lg:pt-[30px] lg:pl-[30px] lg:pr-[30px] xxl:max-w-[1000px] w-full lg:min-w-[798px]">
              {/* create posts div */}
              <div className=" flex lg:gap-[22px] justify-between items-center">
                <img
                  className="xxl:max-w-[44px] xxl:max-h-[44px]"
                  src="/src/assets/Images/Avatars/Leslie.png"
                />
                <input
                  className="bg-[#F0F0F0] border border-transparent rounded-md lg:pl-[25px]  lg:py-[18px] xxl:max-w-[900px] w-full xl:min-w-[720px]  lg:min-w-[670px]"
                  placeholder="Write Something"
                />
              </div>
              <div className="text-right">
                <button className="lg:px-[30px] bg-[#6151FF] lg:py-[10px] border border-transparent rounded-md text-white lg:my-[32px]">
                  Post
                </button>
              </div>

              {/* posts of proples */}
              <div className="bg-white lg:pt-[32px] lg:px-[25px] bordeer border-transparent rounded-md">
                <div className="flex justify-between lg:mb-[35px]">
                  <div className="flex lg:max-w-[280px] lg:gap-[13px] items-center">
                    <div className="">
                      <img
                        className="xxl:max-h-[65px] xxl:max-w-[65px] lg:max-w-[50px] xl:max-w-[57px]"
                        src="/src/assets/Images/Avatars/Lindsay 65x65.png"
                      />
                    </div>
                    <div>
                      <p className="text-[#878787] leading-5 font-normal xxl:mb-[3px]">
                        Today at 1:30 pm
                      </p>
                      <p className="text-[24px] font-semibold leading-8 tracking-tighter">
                        Lindsay Walton
                      </p>
                    </div>
                  </div>
                  <div className="flex lg:gap-[17px] items-center lg:max-w-[60px]">
                    <ThreeDotOption /> <XcloseBtn />
                  </div>
                </div>
                <p className="font-medium leading-6 text-[14px] lg:mb-[18px]">
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
                  <span className="text-[#106FED] font-mediumtext-[14px] leading-6">
                    #Particular
                  </span>
                  &nbsp;
                  <sapn className="text-[#106FED] font-medium text-[14px] leading-6">
                    way#thoroughly
                  </sapn>
                  &nbsp; unaffected projection.
                </p>
                {/* Images of posts */}
                <div className="flex lg:gap-[20px]">
                  <div className="">
                    <img
                      className="border border-transparent rounded-2xl"
                      src="/src/assets/Images/Models/Women/woman 19.png"
                    />
                  </div>

                  <div className="">
                    <img
                      className="lg:mb-[20px] border border-transparent rounded-2xl"
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
                      <div className="text-center absolute mx-auto my-auto top-[45%] right-[45%]">
                        <button className="text-white font-medium leading-6 text-[14px] cursor-pointer">
                          View all
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Status */}
                <div className="flex justify-between items-center lg:pt-[17px] pb-[24px]">
                  <div className="flex items-center justify-between">
                    <PurpleHeart />
                    <p className="ml-[13px]">Louis, Billy and 126 others</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <CommentIcon />
                    <p className="ml-[13px]">Comments &#40;12&#41; </p>
                  </div>
                </div>

                {/* like share send */}
                <div className="border border-x-transparent flex justify-between items-center pl-[25px] pb-[19px] lg:pt-[16px] pr-[40px]">
                  <div className="flex items-center lg:gap-[8px]">
                    <LikeHallow /> <p>Liked &#40;56&#41;</p>
                  </div>
                  <div className="flex items-center lg:gap-[10px]">
                    <ShareHallow /> <p>Share &#40;3&#41;</p>
                  </div>
                  <div className="flex items-center lg:gap-[12px]">
                    <SendPost /> <p>Send</p>
                  </div>
                </div>
                {/* COMMENTS */}
                <div className="mt-[24px]">
                  <div className="flex lg:gap-[15px] xxl:mr-0 lg:mr-[80px]">
                    <img
                      className="lg:max-h-[44px] lg:max-w-[44px] mt-[10px] "
                      src="/src/assets/Images/Avatars/Dries.png"
                    />
                    <div className=" flex border border-transparent rounded-md bg-[#F0F0F0] lg:py-[18px] pr-[25px] pl-[35px]  justify-between">
                      <div className="">
                        <p className="text-[18px] font-medium leading-6">
                          Frances Guerrero
                        </p>
                        <p className="text-[#595959] xxl:pr-[100px] xl:pr-[70px] lg:pr-[50px] text-[14px] font-medium leading-6">
                          Removed demands expense account in outward tedious do.
                          Particular way thoroughly unaffected projection.
                        </p>
                      </div>
                      <p>15hr</p>
                    </div>
                  </div>
                  <p className="ml-[130px] mt-[11px] mb-[15px]">
                    <span>Like &#40;3&#41;</span>&nbsp; • &nbsp;&nbsp;&nbsp;
                    <span>Reply</span>&nbsp; • &nbsp;&nbsp;&nbsp;
                    <span>View 5 replies</span>
                  </p>
                  <div className="ml-[60px] flex lg:gap-[15px]">
                    <img
                      className="lg:max-h-[44px] lg:max-w-[44px] mt-[10px] "
                      src="/src/assets/Images/Avatars/Dries.png"
                    />
                    <div className=" flex border border-transparent rounded-md bg-[#F0F0F0] lg:py-[18px] pr-[25px] pl-[35px]  justify-between">
                      <div className="">
                        <p className="text-[18px] font-medium leading-6">
                          Frances Guerrero
                        </p>
                        <p className="text-[#595959] xxl:pr-[100px] xl:pr-[70px] lg:pr-[50px] text-[14px] font-medium leading-6">
                          Removed demands expense account in outward tedious do.
                          Particular way thoroughly unaffected projection.
                        </p>
                      </div>
                      <p>15hr</p>
                    </div>
                  </div>
                  <p className="ml-[130px] mt-[11px] mb-[15px]">
                    <span>Like &#40;3&#41;</span>&nbsp; • &nbsp;&nbsp;&nbsp;
                    <span>Reply</span>
                  </p>
                  <div className="ml-[60px] flex lg:gap-[15px]">
                    <img
                      className="lg:max-h-[44px] lg:max-w-[44px] mt-[10px] "
                      src="/src/assets/Images/Avatars/Dries.png"
                    />
                    <div className=" flex border border-transparent rounded-md bg-[#F0F0F0] lg:py-[18px] pr-[25px] pl-[35px]  justify-between">
                      <div className="">
                        <p className="text-[18px] font-medium leading-6">
                          Frances Guerrero
                        </p>
                        <p className="text-[#595959] xxl:pr-[100px] xl:pr-[70px] lg:pr-[50px] text-[14px] font-medium leading-6">
                          Removed demands expense account in outward tedious do.
                          Particular way thoroughly unaffected projection.
                        </p>
                      </div>
                      <p>15hr</p>
                    </div>
                  </div>
                  <p className="ml-[130px] mt-[11px] mb-[15px]">
                    <span>Like &#40;3&#41;</span>&nbsp; • &nbsp;&nbsp;&nbsp;
                    <span>Reply</span>
                  </p>
                  <div className="ml-[60px] flex xxl:max-w-[824px] w-[100%] lg:gap-[15px]">
                    <img
                      className="lg:max-h-[44px] lg:max-w-[44px] mt-[10px] "
                      src="/src/assets/Images/Avatars/Dries.png"
                    />
                    <div className="flex border border-transparent rounded-md bg-[#F0F0F0] lg:pt-[18px] pr-[35px] pl-[35px] justify-between">
                      <div className="">
                        <p>Frances Guerrero</p>
                        <p className="xxl:max-w-[580px]">Congratulations</p>
                        <img src="/src/assets/Emoji/Congrats.png" />
                      </div>
                    </div>
                  </div>
                  <p className="text-[#595959] font-medium text-[14px] leading-6 ml-[60px] mt-[25px] pb-[35px] ">
                    ... Load more comments
                  </p>
                </div>
                {/* End of comments */}
              </div>
              {/* Clothing Blog */}
              <div className="bg-white lg:pt-[40px]  bordeer border-transparent rounded-md lg:mt-[25px]">
                <div className="flex justify-between px-[25px] lg:mb-[20px]">
                  <div className="flex xxl:max-w-[280px] lg:gap-[13px] items-center">
                    <div className="">
                      <img
                        className=""
                        src="/src/assets/Images/Avatars/Clothing Brand.png"
                      />
                    </div>
                    <div>
                      <p className="text-[#878787] leading-5 font-normal lg:mb-[3px]">
                        Clothing Store
                      </p>
                      <p className="text-[24px] font-semibold leading-8 tracking-tighter">
                        Clothing Blog
                      </p>
                    </div>
                  </div>
                  <div className="flex lg:gap-[17px] items-center lg:max-w-p[60px]">
                    <ThreeDotOption /> <XcloseBtn />
                  </div>
                </div>
                <img src="/src/assets/Images/Banners/Banner 1.png" />
                <p className="text-[#878787] pl-[30px] mt-[20px] lg:mb-[5px]">
                  Clothing Store
                </p>
                <p className="text-[24px] font-normal leading-7 pl-[30px] pb-[23px]">
                  WHAT TO WEAR FOR VALENTINE’S DAY 2023: 40 OUTFIT IDEAS
                </p>
              </div>
              {/* khaadi post */}
              <div className="bg-white lg:pt-[32px] px-[25px] bordeer border-transparent rounded-md mt-[20px]">
                <div className="flex justify-between lg:mb-[35px]">
                  <div className="flex lg:max-w-[280px] lg:gap-[13px] items-center">
                    <div className="">
                      <img
                        className=""
                        src="/src/assets/Images/Avatars/Lindsay 65x65.png"
                      />
                    </div>
                    <div>
                      <p className="text-[#878787] leading-5 font-normal lg:mb-[3px]">
                        Today at 1:30 pm
                      </p>
                      <p className="text-[24px] font-semibold leading-8 tracking-tighter">
                        Lindsay Walton
                      </p>
                    </div>
                  </div>
                  <div className="flex lg:gap-[17px] items-center lg:max-w-p[60px]">
                    <ThreeDotOption /> <XcloseBtn />
                  </div>
                </div>
                <p className="font-medium leading-6 text-[14px] lg:mb-[18px]">
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
                <div className="flex xxl:gap-[20px]">
                  <img
                    className="border border-transparent rounded-xl"
                    src="/src/assets/Images/Banners/Banner 2.png"
                  />
                </div>

                {/* COMMENTS */}
                <div className="mt-[24px]">
                  <div className="flex lg:gap-[15px] xxl:mr-0 lg:mr-[80px]">
                    <img
                      className="lg:max-h-[44px] lg:max-w-[44px] mt-[10px] "
                      src="/src/assets/Images/Avatars/Dries.png"
                    />
                    <div className=" flex border border-transparent rounded-md bg-[#F0F0F0] lg:py-[18px] pr-[25px] pl-[35px]  justify-between">
                      <div className="">
                        <p className="text-[18px] font-medium leading-6">
                          Frances Guerrero
                        </p>
                        <p className="text-[#595959] xxl:pr-[100px] xl:pr-[70px] lg:pr-[50px] text-[14px] font-medium leading-6">
                          Removed demands expense account in outward tedious do.
                          Particular way thoroughly unaffected projection.
                        </p>
                      </div>
                      <p>15hr</p>
                    </div>
                  </div>
                  <p className="ml-[130px] mt-[11px] mb-[15px]">
                    <span>Like &#40;3&#41;</span>&nbsp; • &nbsp;&nbsp;&nbsp;
                    <span>Reply</span>&nbsp; • &nbsp;&nbsp;&nbsp;
                    <span>View 5 replies</span>
                  </p>
                  <div className="ml-[60px] flex lg:gap-[15px]">
                    <img
                      className="lg:max-h-[44px] lg:max-w-[44px] mt-[10px] "
                      src="/src/assets/Images/Avatars/Dries.png"
                    />
                    <div className=" flex border border-transparent rounded-md bg-[#F0F0F0] lg:py-[18px] pr-[25px] pl-[35px]  justify-between">
                      <div className="">
                        <p className="text-[18px] font-medium leading-6">
                          Frances Guerrero
                        </p>
                        <p className="text-[#595959] xxl:pr-[100px] xl:pr-[70px] lg:pr-[50px] text-[14px] font-medium leading-6">
                          Removed demands expense account in outward tedious do.
                          Particular way thoroughly unaffected projection.
                        </p>
                      </div>
                      <p>15hr</p>
                    </div>
                  </div>
                  <p className="ml-[130px] mt-[11px] mb-[15px]">
                    <span>Like &#40;3&#41;</span>&nbsp; • &nbsp;&nbsp;&nbsp;
                    <span>Reply</span>
                  </p>
                  <div className="ml-[60px] flex lg:gap-[15px]">
                    <img
                      className="lg:max-h-[44px] lg:max-w-[44px] mt-[10px] "
                      src="/src/assets/Images/Avatars/Dries.png"
                    />
                    <div className=" flex border border-transparent rounded-md bg-[#F0F0F0] lg:py-[18px] pr-[25px] pl-[35px]  justify-between">
                      <div className="">
                        <p className="text-[18px] font-medium leading-6">
                          Frances Guerrero
                        </p>
                        <p className="text-[#595959] xxl:pr-[100px] xl:pr-[70px] lg:pr-[50px] text-[14px] font-medium leading-6">
                          Removed demands expense account in outward tedious do.
                          Particular way thoroughly unaffected projection.
                        </p>
                      </div>
                      <p>15hr</p>
                    </div>
                  </div>
                  <p className="ml-[130px] mt-[11px] mb-[15px]">
                    <span>Like &#40;3&#41;</span>&nbsp; • &nbsp;&nbsp;&nbsp;
                    <span>Reply</span>
                  </p>
                  <p className="text-[#595959] font-medium text-[14px] leading-6 ml-[60px] mt-[25px] pb-[35px] ">
                    ... Load more comments
                  </p>
                </div>
                {/* End of comments */}
              </div>

              {/* Clothing store */}
              <div className="bg-white xxl:pt-[32px] px-[25px] bordeer border-transparent rounded-md mt-[20px]">
                <div className="flex justify-between px-[25px] xxl:mb-[20px]">
                  <div className="flex xxl:max-w-[280px] xxl:gap-[13px] items-center">
                    <div className="">
                      <img
                        className=""
                        src="/src/assets/Images/Avatars/Lindsay 65x65.png"
                      />
                    </div>
                    <div>
                      <p className="text-[#878787] leading-5 font-normal xxl:mb-[3px]">
                        Today at 1:30 pm
                      </p>
                      <p className="text-[24px] font-semibold leading-8 tracking-tighter">
                        Lindsay Walton
                      </p>
                    </div>
                  </div>
                  <div className="flex xxl:gap-[17px] items-center xxl:max-w-p[60px]">
                    <ThreeDotOption /> <XcloseBtn />
                  </div>
                </div>

                <div className="flex ml-[] mb-[]">
                  <div>
                    <img src="/src/assets/Images/Models/Women/woman 23.png" />
                    <div className="flex mt-[20px] xxl:gap-[20px]">
                      <p>Needle Craft Embroidered Shirt WGK-KDW</p>
                      <p>PKR 3890</p>
                    </div>
                  </div>
                  <div>
                    <img src="/src/assets/Images/Models/Women/woman 23.png" />
                    <div className="flex mt-[20px] xxl:gap-[20px]">
                      <p>Needle Craft Embroidered Shirt WGK-KDW</p>
                      <p>PKR 3890</p>
                    </div>
                  </div>
                  <div>
                    <img src="/src/assets/Images/Models/Women/woman 23.png" />
                    <div className="flex mt-[20px] xxl:gap-[20px]">
                      <p>Needle Craft Embroidered Shirt WGK-KDW</p>
                      <p>PKR 3890</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Side div */}
            <div>
              <RightAside />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketPlaceChat;
