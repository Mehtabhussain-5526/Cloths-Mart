import React from "react";
import Nav from "./SubComponents/Nav";
import {
  ComentsHallow,
  CommentIcon,
  LikeHallow,
  PurpleHeart,
  SendBtnHallow,
  SendPost,
  ShareArrowIcon,
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
        <div className="xxl:max-w-[1200px] w-[100%] border border-t-0 border-r-0  md:min-w-[570px]">
          <Nav />
          {/* main dive and aside div */}
          <div className="xl:flex border-t-[1px]">
            {/* main div */}
            <div className="border border-t-0 border-l-0 border-b-transparen  lg:pt-[30px] md:pt-[20px] lg:pl-[30px] md:pl-[20px] lg:pr-[30px] md:pr-5 xxl:max-w-[1000px] w-full lg:min-w-[798px]">
              {/* create posts div */}
              {/* hidden for 420px */}
              <div className="sm:block mb:hidden">
                <div className=" flex sm:gap-[22px] justify-between items-center md:mx-0 md:mt-0 sm:mt-5 sm:mx-5">
                  <img
                    className="sm:max-w-[44px] sm:max-h-[44px]"
                    src="/src/assets/Images/Avatars/Leslie.png"
                  />
                  <input
                    className="bg-[#F0F0F0] border border-transparent rounded-md lg:pl-[27px] sm:pl-[27px] lg:pb-[18px] lg:pt-[20px] sm:py-[15px] w-full outline-none"
                    placeholder="Write Something"
                  />
                </div>
                <div className="text-right">
                  <button className="sm:px-[30px] bg-[#6151FF] sm:py-[10px] border border-transparent rounded-md text-white lg:mt-[32px] lg:mb-[34px] sm:my-[20px] md:mr-0 sm:mr-5 ">
                    Post
                  </button>
                </div>
              </div>

              {/* posts of proples */}
              <div className="bg-white lg:pt-[32px] mb:pt-[20px] mb:px-[25px] border border-transparent rounded-md md:mx-0 sm:my-0 mb:mx-[20px] mb:mt-[16px] mb:mb-[24px] ">
                <div className="flex justify-between lg:mb-[35px] md:mb-5 mb:mb-[18px]">
                  <div className="flex lg:max-w-[280px] mb:gap-[13px] items-center">
                    <div className="sm:max-w-[65px] mb:max-w-[34px]">
                      <img
                        className="xxl:max-h-[65px] xxl:max-w-[65px] lg:max-w-[50px] xl:max-w-[57px]"
                        src="/src/assets/Images/Avatars/Lindsay 65x65.png"
                      />
                    </div>
                    <div>
                      <p className="text-[#878787] md:leading-5 font-normal sm:mb-[4px] sm:text-[16px] mb:text-[10px] mb:leading-3 mb:mb-[2.28px]">
                        Today at 1:30 pm
                      </p>
                      <p className="sm:text-[24px] mb:font-semibold sm:leading-8 tracking-tighter text-[13px] mb:leading-[17px]">
                        Lindsay Walton
                      </p>
                    </div>
                  </div>
                  {/* hidden for 420px */}
                  <div className="sm:block mb:hidden">
                    <div className="flex sm:gap-[17px] items-center md:max-w-[60px] my-4">
                      <ThreeDotOption /> <XcloseBtn />
                    </div>
                  </div>
                </div>
                <p className="text-[#595959] font-medium sm:leading-6 sm:text-[14px] mb:mb-[18px] mb:text-[13px] mb:leading-4 ">
                  Removed demands expense account in outward tedious do.&nbsp;
                  <span className="text-[#106FED] font-medium text-[14px] sm:leading-6 ">
                    @Particular
                  </span>
                  &nbsp; way thoroughly unaffected projection.Removed demands
                  expense account in outward tedious do. Particular way
                  thoroughly unaffected projection.Removed demands expense
                  account in outward tedious do. Particular way thoroughly
                  unaffected projection.Removed demands expense account in
                  outward tedious do. &nbsp;
                  <span className="text-[#106FED] font-medium text-[14px] sm:leading-6">
                    #Particular
                  </span>
                  &nbsp;
                  <span className="text-[#106FED] font-medium text-[14px] sm:leading-6">
                    way#thoroughly
                  </span>
                  &nbsp; unaffected projection.
                </p>
                {/* Images of posts */}
                <div className="flex sm:gap-[24px] mb:gap-[10px]">
                  <div className="">
                    <img
                      className="border border-transparent rounded-lg"
                      src="/src/assets/Images/Models/Women/woman 19.png"
                    />
                  </div>

                  <div className="">
                    <img
                      className="sm:mb-[20px] mb:mb:mb-[10px] border border-transparent rounded-lg"
                      src="/src/assets/Images/Models/Women/woman 20.png"
                    />
                    <div className="relative">
                      <img
                        className="border border-transparent rounded-lg"
                        src="/src/assets/Images/Models/Women/woman under view all btn.png"
                      />
                      <img
                        className="absolute top-0"
                        src="/src/assets/Images/Models/Women/transp.png"
                      />
                      <div className="text-center absolute mx-auto my-auto top-[45%] right-[45%] sm:block mb:hidden">
                        <button className="text-white font-medium leading-6 text-[14px] cursor-pointer">
                          View all
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* hidden for SM and above */}
                <div className="sm:hidden ">
                  <div className="flex justify-between mt-[20px] mb-[18px] border-t-[1px] pt-[16px]">
                    <div className="flex items-center gap-2 text-[#595959] font-medium text-[10px] leading-[10px]">
                      <div>
                        <LikeHallow />
                      </div>
                      <div>Liked</div>
                    </div>
                    <div className="flex items-center gap-2 text-[#595959] font-medium text-[10px] leading-[10px]">
                      <div>
                        <ComentsHallow />
                      </div>
                      <div>Comments</div>
                    </div>
                    <div className="flex items-center gap-2 text-[#595959] font-medium text-[10px] leading-[10px]">
                      <div>
                        <ShareArrowIcon />
                      </div>
                      <div>Share</div>
                    </div>
                  </div>
                </div>
                {/* Status */}
                {/* hidden for 420px */}
                <div className="sm:block mb:hidden">
                  <div className="flex justify-between items-center sm:pt-[17px] pb-[24px]">
                    <div className="flex items-center justify-between">
                      <PurpleHeart />
                      <p className="ml-[13px] lg:text-[16px] sm:text-[14px]">
                        Louis, Billy and 126 others
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <CommentIcon />
                      <p className="ml-[13px] lg:text-[16px] sm:text-[14px]">
                        Comments &#40;12&#41;
                      </p>
                    </div>
                  </div>
                </div>

                {/* like share send */}
                {/* hidden for 420px */}
                <div className="sm:block mb:hidden">
                  <div className="border border-x-transparent flex justify-between items-center pl-[25px] pb-[12px] sm:pt-[15px] pr-[40px]">
                    <div className="flex items-center sm:gap-[8px] lg:text-[16px] sm:text-[14px]">
                      <LikeHallow /> <p>Liked &#40;56&#41;</p>
                    </div>
                    <div className="flex items-center sm:gap-[10px] lg:text-[16px] sm:text-[14px]">
                      <ShareHallow /> <p>Share &#40;3&#41;</p>
                    </div>
                    <div className="flex items-center sm:gap-[12px] lg:text-[16px] sm:text-[14px]">
                      <SendPost /> <p>Send</p>
                    </div>
                  </div>
                </div>

                {/* COMMENTS */}
                {/* hidden for 420px */}
                <div className="mt-[24px] sm:block mb:hidden">
                  <div className="flex sm:gap-[15px] xxl:mr-0 ">
                    <img
                      className="sm:max-h-[44px] sm:max-w-[44px] mt-[10px] "
                      src="/src/assets/Images/Avatars/Dries.png"
                    />
                    <div className=" flex border border-transparent rounded-md bg-[#F0F0F0]  lg:pt-[26px] lg:pl-[27px] sm:py-[15px] pr-[25px] pl-[25px] lg:min-w-[567px] lg:w-full justify-between">
                      <div className="">
                        <p className="lg:text-[18px] md:text-[16px] font-medium leading-6">
                          Frances Guerrero
                        </p>
                        <p className="text-[#595959]  text-[14px] font-medium leading-6">
                          Removed demands expense account in outward tedious do.
                          Particular way thoroughly unaffected projection.
                        </p>
                      </div>
                      <p className="xxl:pl-[100px] xl:pl-[70px] lg:pl-[50px] text-[14px] font-medium  leading-[24px] ">
                        15hr
                      </p>
                    </div>
                  </div>
                  <p className="ml-[130px] mt-[11px] mb-[15px]">
                    <span className="lg:text-[16px] sm:text-[14px]">
                      Like &#40;3&#41;
                    </span>
                    &nbsp; • &nbsp;&nbsp;&nbsp;
                    <span className="lg:text-[16px] sm:text-[14px]">Reply</span>
                    &nbsp; • &nbsp;&nbsp;&nbsp;
                    <span className="lg:text-[16px] sm:text-[14px]">
                      View 5 replies
                    </span>
                  </p>
                  <div className="lg:ml-[60px] md:ml-[25px] flex sm:gap-[15px]">
                    <img
                      className="sm:max-h-[44px] sm:max-w-[44px] mt-[10px] "
                      src="/src/assets/Images/Avatars/Dries.png"
                    />
                    <div className=" flex border border-transparent rounded-md bg-[#F0F0F0]  lg:pt-[26px] lg:pl-[27px] sm:py-[15px] pr-[25px] pl-[25px] lg:min-w-[567px] lg:w-full justify-between">
                      <div className="">
                        <p className="lg:text-[18px] md:text-[16px] font-medium leading-6">
                          Frances Guerrero
                        </p>
                        <p className="text-[#595959]  text-[14px] font-medium leading-6">
                          Removed demands expense account in outward tedious do.
                          Particular way thoroughly unaffected projection.
                        </p>
                      </div>
                      <p className="xxl:pl-[100px] xl:pl-[70px] lg:pl-[50px] text-[14px] font-medium  leading-[24px] lg:text-[16px] sm:text-[14px]">
                        15hr
                      </p>
                    </div>
                  </div>
                  <p className="ml-[130px] mt-[11px] mb-[15px]">
                    <span className="lg:text-[16px] sm:text-[14px]">
                      Like &#40;3&#41;
                    </span>
                    &nbsp; • &nbsp;&nbsp;&nbsp;
                    <span className="lg:text-[16px] sm:text-[14px]">Reply</span>
                  </p>
                  <div className="lg:ml-[60px] md:ml-[25px] flex sm:gap-[15px]">
                    <img
                      className="sm:max-h-[44px] sm:max-w-[44px] mt-[10px] "
                      src="/src/assets/Images/Avatars/Dries.png"
                    />
                    <div className=" flex border border-transparent rounded-md bg-[#F0F0F0]  lg:pt-[26px] lg:pl-[27px] sm:py-[15px] pr-[25px] pl-[25px] lg:min-w-[567px] lg:w-full justify-between">
                      <div className="">
                        <p className="lg:text-[18px] md:text-[16px] font-medium leading-6">
                          Frances Guerrero
                        </p>
                        <p className="text-[#595959]  text-[14px] font-medium leading-6">
                          Removed demands expense account in outward tedious do.
                          Particular way thoroughly unaffected projection.
                        </p>
                      </div>
                      <p className="xxl:pl-[100px] xl:pl-[70px] lg:pl-[50px] text-[14px] font-medium  leading-[24px]">
                        15hr
                      </p>
                    </div>
                  </div>
                  <p className="ml-[130px] mt-[11px] mb-[15px]">
                    <span className="lg:text-[16px] sm:text-[14px]">
                      Like &#40;3&#41;
                    </span>
                    &nbsp; • &nbsp;&nbsp;&nbsp;
                    <span className="lg:text-[16px] sm:text-[14px]">Reply</span>
                  </p>
                  <div className="lg:ml-[60px] md:ml-[25px] flex xxl:max-w-[824px] sm:gap-[15px]">
                    <img
                      className="sm:max-h-[44px] sm:max-w-[44px] mt-[10px] "
                      src="/src/assets/Images/Avatars/Dries.png"
                    />
                    <div className="flex border border-transparent rounded-md bg-[#F0F0F0]  lg:pt-[26px] lg:pl-[27px] sm:pt-[18px] pr-[35px] pl-[25px] justify-between">
                      <div className="">
                        <p className="lg:text-[18px] md:text-[16px] font-medium leading-6">
                          Frances Guerrero
                        </p>
                        <p className="xxl:max-w-[580px]">Congratulations</p>
                        <img src="/src/assets/Emoji/Congrats.png" />
                      </div>
                    </div>
                  </div>
                  <p className="text-[#595959] font-medium text-[14px] leading-6 lg:ml-[60px] md:ml-[25px] mt-[25px] pb-[27px] ">
                    ... Load more comments
                  </p>
                </div>
                {/* End of comments */}
              </div>
              {/* Clothing Blog */}
              <div className="bg-white lg:pt-[40px] mb:pt-[20px]  bordeer border-transparent rounded-md sm:mt-[25px] md:mx-0 mb:mx-5">
                <div className="flex justify-between px-[25px] mb:mb-[20px]">
                  <div className="flex xxl:max-w-[280px] mb:gap-[13px] items-center">
                    <div className="">
                      <img
                        className="md:w-auto mb:w-[34px]"
                        src="/src/assets/Images/Avatars/Clothing Brand.png"
                      />
                    </div>
                    <div>
                      <p className="text-[#878787] md:leading-5 font-normal lg:mb-[3px] md:text-[16px] mb:text-[10px] mb:leading-3 mb:mb-[2.28px]">
                        Clothing Store
                      </p>
                      <p className="md:text-[24px] font-semibold md:leading-8 tracking-tighter mb:leading-[17px] mb:txet-[13px]">
                        Clothing Blog
                      </p>
                    </div>
                  </div>
                  {/* hidden for 420px */}
                  <div className="sm:block mb:hidden">
                    <div className="flex sm:gap-[17px] items-center md:max-w-[60px] my-4">
                      <ThreeDotOption /> <XcloseBtn />
                    </div>
                  </div>
                </div>
                <img src="/src/assets/Images/Banners/Banner 1.png" />
                <p className="text-[#878787] pl-[30px] md:mt-[20px] md:leading-6 mb:mt-4 md:mb-[5px] md:text-[16px] mb:text-[10px] mb:leading-3">
                  Clothing Store
                </p>
                <p className="md:text-[24px] mb:text-[13px] font-normal md:leading-7 mb:tracking-tighter pl-[30px] pb-[23px] mb:lowercase md:uppercase mb:leading-">
                  WHAT TO WEAR FOR VALENTINE’S DAY 2023: 40 OUTFIT IDEAS
                </p>
              </div>
              {/* khaadi post */}
              <div className="bg-white lg:pt-[32px] mb:pt-[20px] px-[25px] bordeer border-transparent rounded-md md:mt-[20px] mb:mt-6 md:mx-0 mb:mx-5">
                <div className="flex justify-between lg:mb-[35px] sm:pb-5 mb:pb-[17px]">
                  <div className="flex lg:max-w-[280px] mb:gap-[13px] items-center ">
                    <div className="">
                      <img
                        className="md:w-auto mb:w-[34px]"
                        src="/src/assets/Images/Avatars/Lindsay 65x65.png"
                      />
                    </div>
                    <div>
                      <p className="text-[#878787] md:leading-5 font-normal lg:mb-[3px] md:text-[16px] mb:text-[10px] mb:leading-3 mb:mb-[2.28px]">
                        Today at 1:30 pm • 2hrs
                      </p>
                      <p className="md:text-[24px] font-semibold md:leading-8 tracking-tighter mb:text-[13px] mb:leading-[17px]">
                        Lori Ferguson
                      </p>
                    </div>
                  </div>
                  {/* hidden for 420px */}
                  <div className="sm:block mb:hidden">
                    <div className="flex sm:gap-[17px] items-center md:max-w-[60px] my-4">
                      <ThreeDotOption /> <XcloseBtn />
                    </div>
                  </div>
                </div>
                <p className="mb:font-medium md:leading-6 mb:leading-4 sm:text-[14px] mb:text-[13px] mb:mb-[18px]">
                  Removed demands expense account in outward tedious do.&nbsp;
                  <span className="text-[#106FED] font-medium sm:text-[14px] mb:text-[13px] md:leading-6 mb:leading-4">
                    @Particular
                  </span>
                  &nbsp; way thoroughly unaffected projection.Removed demands
                  expense account in outward tedious do. Particular way
                  thoroughly unaffected projection.Removed demands expense
                  account in outward tedious do. Particular way thoroughly
                  unaffected projection.Removed demands expense account in
                  outward tedious do. &nbsp;
                  <span className="text-[#106FED] font-medium sm:text-[14px] mb:text-[13px] md:leading-6 mb:leading-4">
                    #Particular
                  </span>
                  &nbsp;
                  <span className="text-[#106FED] font-medium sm:text-[14px] mb:text-[13px] md:leading-6 mb:leading-4">
                    way#thoroughly
                  </span>
                  &nbsp; unaffected projection.
                </p>
                {/* Images of posts */}
                <div className="flex xxl:gap-[20px]">
                  <img
                    className="border border-transparent rounded-xl"
                    src="/src/assets/Images/Banners/Banner 2.png"
                  />
                </div>
                {/* like comment share bar hidden for 640 and above */}
                <div className="sm:hidden mb-[18px]">
                  <div className="flex justify-between mt-[20px] pb-[18px] border-t-[1px] pt-[16px]">
                    <div className="flex items-center gap-2 text-[#595959] font-medium text-[10px] leading-[10px]">
                      <div>
                        <LikeHallow />
                      </div>
                      <div>
                        <p>Liked</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-[#595959] font-medium text-[10px] leading-[10px]">
                      <div>
                        <ComentsHallow />
                      </div>
                      <div>
                        <p>Comments</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-[#595959] font-medium text-[10px] leading-[10px]">
                      <div>
                        <ShareArrowIcon />
                      </div>
                      <div>
                        <p>Share</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* khaadi image status*/}
                {/* hidden for 420px */}
                <div className="sm:block mb:hidden">
                  <div className="flex items-center justify-between sm:mt-[27px] lg:mb-[40px] sm:mb-[27px]">
                    <div className="flex gap-5">
                      <div className="flex items-center sm:gap-[8px]">
                        <LikeHallow />
                        <p className=" lg:text-[16px] sm:text-[14px]">
                          Liked &#40;56&#41;
                        </p>
                      </div>
                      <div className="flex items-center sm:gap-[10px] justify-between">
                        <CommentIcon />
                        <p className=" lg:text-[16px] sm:text-[14px]">
                          Comments &#40;12&#41;
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center sm:gap-[10px] lg:text-[16px] sm:text-[14px]">
                      <ShareHallow />
                      <p className="lg:text-[16px] sm:text-[14px]">
                        Share &#40;12&#41;
                      </p>
                    </div>
                  </div>
                </div>

                {/* comment bar and COMMENTS section */}
                {/* Add a comment */}
                {/* hidden for 420px */}
                <div className="sm:block mb:hidden">
                  <div className="flex gap-[15px] items-center">
                    <img
                      className="max-w-[44px] max-h-[44px]"
                      src="/src/assets/Images/Avatars/Leslie.png"
                    />
                    <div className="relative max-w-[1440px] w-full">
                      <input
                        className="bg-[#F0F0F0] border max-w-[1440px] w-full border-transparent rounded-md sm:pl-[25px] lg:py-[18px] sm:py-[15px] outline-none"
                        placeholder="Add a comments"
                      />
                      <div className="absolute top-[39%] right-[20px]">
                        <SendBtnHallow />
                      </div>
                    </div>
                  </div>
                </div>
                {/* hidden for 420px */}
                <div className="mb:hidden sm:block">
                  <div className="mt-[24px]">
                    <div className="flex sm:gap-[15px] xxl:mr-0 ">
                      <img
                        className="sm:max-h-[44px] sm:max-w-[44px] mt-[10px] "
                        src="/src/assets/Images/Avatars/Dries.png"
                      />
                      <div className=" flex border border-transparent rounded-md bg-[#F0F0F0]  lg:pt-[26px] lg:pl-[27px] sm:py-[15px] pr-[25px] pl-[25px] lg:min-w-[567px] lg:w-full justify-between">
                        <div className="">
                          <p className="lg:text-[18px] md:text-[16px] font-medium leading-6">
                            Frances Guerrero
                          </p>
                          <p className="text-[#595959]  text-[14px] font-medium leading-6">
                            Removed demands expense account in outward tedious
                            do. Particular way thoroughly unaffected projection.
                          </p>
                        </div>
                        <p className="xxl:pl-[100px] xl:pl-[70px] lg:pl-[50px] text-[14px] font-medium  leading-[24px] ">
                          15hr
                        </p>
                      </div>
                    </div>
                    <p className="ml-[130px] mt-[11px] mb-[15px]">
                      <span className="lg:text-[16px] sm:text-[14px]">
                        Like &#40;3&#41;
                      </span>
                      &nbsp; • &nbsp;&nbsp;&nbsp;
                      <span className="lg:text-[16px] sm:text-[14px]">
                        Reply
                      </span>
                      &nbsp; • &nbsp;&nbsp;&nbsp;
                      <span className="lg:text-[16px] sm:text-[14px]">
                        View 5 replies
                      </span>
                    </p>
                    <div className="lg:ml-[60px] md:ml-[25px] flex sm:gap-[15px]">
                      <img
                        className="sm:max-h-[44px] sm:max-w-[44px] mt-[10px] "
                        src="/src/assets/Images/Avatars/Dries.png"
                      />
                      <div className=" flex border border-transparent rounded-md bg-[#F0F0F0]  lg:pt-[26px] lg:pl-[27px] sm:py-[15px] pr-[25px] pl-[25px] lg:min-w-[567px] lg:w-full justify-between">
                        <div className="">
                          <p className="lg:text-[18px] md:text-[16px] font-medium leading-6">
                            Frances Guerrero
                          </p>
                          <p className="text-[#595959]  text-[14px] font-medium leading-6">
                            Removed demands expense account in outward tedious
                            do. Particular way thoroughly unaffected projection.
                          </p>
                        </div>
                        <p className="xxl:pl-[100px] xl:pl-[70px] lg:pl-[50px] text-[14px] font-medium  leading-[24px]">
                          15hr
                        </p>
                      </div>
                    </div>
                    <p className="ml-[130px] mt-[11px] mb-[15px]">
                      <span className="lg:text-[16px] sm:text-[14px]">
                        Like &#40;3&#41;
                      </span>
                      &nbsp; • &nbsp;&nbsp;&nbsp;
                      <span className="lg:text-[16px] sm:text-[14px]">
                        Reply
                      </span>
                    </p>
                    <div className="lg:ml-[60px] md:ml-[25px] flex sm:gap-[15px]">
                      <img
                        className="sm:max-h-[44px] sm:max-w-[44px] mt-[10px] "
                        src="/src/assets/Images/Avatars/Dries.png"
                      />
                      <div className=" flex border border-transparent rounded-md bg-[#F0F0F0]  lg:pt-[26px] lg:pl-[27px] sm:py-[15px] pr-[25px] pl-[25px] lg:min-w-[567px] lg:w-full justify-between">
                        <div className="">
                          <p className="lg:text-[18px] md:text-[16px] font-medium leading-6">
                            Frances Guerrero
                          </p>
                          <p className="text-[#595959]  text-[14px] font-medium leading-6">
                            Removed demands expense account in outward tedious
                            do. Particular way thoroughly unaffected projection.
                          </p>
                        </div>
                        <p className="xxl:pl-[100px] xl:pl-[70px] lg:pl-[50px] text-[14px] font-medium  leading-[24px]">
                          15hr
                        </p>
                      </div>
                    </div>
                    <p className="ml-[130px] mt-[11px] mb-[15px]">
                      <span className="lg:text-[16px] sm:text-[14px]">
                        Like &#40;3&#41;
                      </span>
                      &nbsp; • &nbsp;&nbsp;&nbsp;
                      <span className="lg:text-[16px] sm:text-[14px]">
                        Reply
                      </span>
                    </p>
                    <p className="text-[#595959] font-medium text-[14px] leading-6 lg:ml-[60px] md:ml-[25px] mt-[25px] pb-[35px] ">
                      ... Load more comments
                    </p>
                  </div>
                </div>
                {/* End of comments */}
              </div>
              {/* Clothing store */}
              {/* hidden for 420px */}
              <div className="bg-white pt-[32px] px-[25px] bordeer border-transparent rounded-md mt-[20px] sm:block mb:hidden">
                <div className="flex justify-between px-[25px] mb-[20px]">
                  <div className="flex max-w-[280px] gap-[13px] items-center">
                    <div className="">
                      <img
                        className=""
                        src="/src/assets/Images/Avatars/Zara rounded.png"
                      />
                    </div>
                    <div>
                      <p className="text-[#878787] leading-5 font-normal mb-[3px]">
                        Clothes Store
                      </p>
                      <p className="text-[24px] font-semibold leading-8 tracking-tighter">
                        ZARA
                      </p>
                    </div>
                  </div>
                  <div className="flex sm:gap-[17px] items-center md:max-w-[60px] my-4">
                    <ThreeDotOption /> <XcloseBtn />
                  </div>
                </div>

                <div className="pb-[39px] ">
                  <div className="md:flex lg:flex-nowrap sm:gap-[13px]  sm:flex sm:justify-between">
                    <div className=" sm:pt-[15px] sm:pl-[15px] sm:pr-[15px] sm:pb-[25px] sm:min-w-auto">
                      <img
                        className=""
                        src="/src/assets/Images/Models/Women/woman 21.png"
                      />
                      <div className="lg:flex mt-[20px] sm:gap-[19px] ">
                        <p className="font-semibold text-[14px] leading-5">
                          Needle Craft Embroidered Shirt WGK-KDW
                        </p>
                        <p className="font-semibold text-[14px] leading-5 text-right min-w-[68px] text-nowrap self-center">
                          PKR 3890
                        </p>
                      </div>
                    </div>
                    <div className=" sm:pt-[15px] sm:pl-[15px] sm:pr-[15px] sm:pb-[25px] sm:min-w-auto">
                      <img
                        className=""
                        src="/src/assets/Images/Models/Women/woman 22.png"
                      />
                      <div className="lg:flex mt-[20px] sm:gap-[19px] ">
                        <p className="font-semibold text-[14px] leading-5">
                          Needle Craft Embroidered Shirt WGK-KDW
                        </p>
                        <p className="font-semibold text-[14px] leading-5 text-right min-w-[68px] text-nowrap self-center">
                          PKR 3890
                        </p>
                      </div>
                    </div>
                    <div className=" sm:pt-[15px] sm:pl-[15px] sm:pr-[15px] sm:pb-[25px] sm:min-w-auto">
                      <img
                        className=""
                        src="/src/assets/Images/Models/Women/woman 23.png"
                      />
                      <div className="lg:flex mt-[20px] sm:gap-[19px] ">
                        <p className="font-semibold text-[14px] leading-5">
                          Needle Craft Embroidered Shirt WGK-KDW
                        </p>
                        <p className="font-semibold text-[14px] leading-5 text-right min-w-[68px] text-nowrap self-center">
                          PKR 3890
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center ">
                    <p className="max-w-fit underline text-[16px] leading-5 font-normal text-[#6151FF] mt-[29px]  cursor-pointer">
                      See All
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Side div */}
            {/* hidden for 420px */}
            <div className="sm:block mb:hidden">
              <RightAside />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketPlaceChat;
