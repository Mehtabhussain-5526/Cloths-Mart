import React, { useState } from "react";
import Nav from "./SubComponents/Nav";
import GridSection from "./SubComponents/GridSection";
import LefttAside from "./LeftAside";
import PinnedItemGrid from "./SubComponents/PinnedItemGrid";
import { CloseSignWithPurpleBG, ModalCloseBtn } from "../../util/logo";
const PinnedItems = () => {
  const [showModal, SetShowModal] = useState(false);
  const openModal = () => {
    SetShowModal(true);
    console.log(showModal);
  };
  const closeModal = () => {
    SetShowModal(false);
  };
  return (
    <>
      <div className="flex bg-[#F9FBFF]">
        <div className="">
          <LefttAside />
        </div>
        {/* main body */}
        <div className="max-w-[1200px] w-[100%] border border-t-transparent border-b-transparent border-r-transparent">
          <Nav />

          {/* divs after nav compnents */}
          <div className="border border-r-transparent border-b-transparent border-l-transparent pl-[80px] xl:pt-[47px] pb-[100px] md:px-[20px] xl:pl-[40px] xl:pr-[98px] md:pt-[20px]  mb:px-[20px]">
            {/* title and selction btn */}
            <div className="md:block mb:hidden">
              <div className="flex justify-between items-center mb-[50px] max-w-[1058px]">
                <div className="">
                  <p className=" text-[#808191] mb-[8px] xl:text-[24px] xl:font-normal xl:leading-6 xl:tracking-tighter lg:text-[20px] lg:mt-[0px] lg:font-normal lg:leading-6 lg:tracking-tighter lg:max-w-fit md:text-[20px]  md:font-normal md:leading-6 md:tracking-tighter md:max-w-fit">
                    Salesbag
                  </p>
                  <p className="xl:text-[48px] xl:font-semibold xl:leading-[56px] xl:tracking-tighter lg:mb-[0px] lg:text-[35px] md:font-semibold lg:leading-[56px] lg:tracking-tighter lg:max-w-fit md:text-[30px] md:leading-[30px] ">
                    Pinned Items
                  </p>
                </div>
                <div className="items-end">
                  <ul>
                    <li
                      className="font-normal leading-5 tracking-tighter mt-[68px] hover:text-[#6151FF] underline cursor-pointer"
                      onClick={openModal}
                    >
                      Select pinned items
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between py-[20px] md:hidden">
              <div className="">
                <p className="text-[16px] font-semibold leading-6 tracking-tighter">
                  10 Pinned Items
                </p>
              </div>
              <div className="flex items-center gap-[7px]">
                <button
                  onClick={openModal}
                  className="bg-[#6151ff] text-white border border-transparent rounded-[5000px] px-[15px] py-[5px] mb:text-[13px] font-light text-center tracking-tighter"
                >
                  Start New Chat
                </button>
                <button className="flex items-center justify-center gap-[10px] text-center px-[15px] py-[5px] border border-[#6151ff] rounded-[5000px] text-[#6151ff] font-light mb:text-[13px] tracking-tighter">
                  <CloseSignWithPurpleBG />
                  Cancel
                </button>
              </div>
            </div>
            {/* collection */}
            <div className=" max-w-[1058px]">
              <PinnedItemGrid />
            </div>
          </div>
        </div>
      </div>
      {showModal == true && (
        <div className="fixed top-0 xxl:w-[1440px] w-full mb:min-w-[430px]">
          <div className="bg-black  bg-opacity-15 xxl:pt-[193px] mb:pt-[121px] pb-[5000px] mb:w-full">
            <div className="max-w-[904px] mb:min-w-[378px] mb:mx-[20px] sm:mx-[40px] lg:mx-auto md:px-[50px] sm:px-[43px] mb:px-[28px] bg-white mb:pt-[16px] md:pt-[48px] pb-[56px] mb:border mb:border-transparent mb:rounded-2xl md:border-none md:rounded-none">
              <div className="flex justify-between xxl:mb-[49px] mb:mb-[19px]">
                <p className="font-semibold xxl:text-[48px] mb:text-[24px] leading-[56px] tracking-[-2%] ">
                  Start New Chat
                </p>
                <button
                  onClick={closeModal}
                  className="xxl:w-[55px] xxl:h-[55px] mb:w-[32px] mb:h-[32px] border border-transparent rounded-full bg-black text-white xxl:text-[20px] mb:text-[16px] leading-6 font-normal xxl:tracking-[-2%] self-center"
                >
                  X
                </button>
              </div>
              <label className="max-w-[818px] w-full block xxl:text-[20px] xxl:font-normal xxl:leading-6 xxl:tracking-tighter xxl:mb-[17px] mb:text-[14px] mb:leading-6 mb:tracking-[-2%] mb:font-normal mb:mb-[5px] ">
                Group Name
              </label>
              <input
                className="h-[56px] pl-[25px] xxl:max-w-[818px] mb:min-w-[321px] w-full block bg-[#F0F0F0] border-[1px] border-[#D0D0D0] rounded-md outline-none xxl:mb-[36px] mb:mb-[26px]"
                type="text"
              />
              <label className="max-w-[818px] w-full block xxl:text-[20px] xxl:font-normal xxl:leading-6 xxl:tracking-tighter xxl:mb-[17px] mb:text-[14px] mb:leading-6 mb:tracking-[-2%] mb:font-normal mb:mb-[5px] ">
                Add People*
              </label>
              <input
                className="h-[56px] pl-[25px] xxl:max-w-[818px] mb:min-w-[321px] w-full block bg-[#F0F0F0] border-[1px] border-[#D0D0D0] rounded-md outline-none xxl:mb-[48px] mb:mb-[32px]"
                type="text"
              />
              <label className="max-w-[818px] w-full block xxl:text-[20px] xxl:font-normal xxl:leading-6 xxl:tracking-tighter xxl:mb-[17px] mb:text-[14px] mb:leading-6 mb:tracking-[-2%] mb:font-normal mb:mb-[5px] ">
                Invite People
              </label>
              <input
                className="h-[56px] pl-[25px] xxl:max-w-[818px] mb:min-w-[321px] w-full block bg-[#F0F0F0] border-[1px] border-[#D0D0D0] rounded-md outline-none xxl:mb-[48px] mb:mb-[169px]"
                type="text"
              />
              <button className="cursor-pointer bg-[#6151FF] text-white w-full text-[20px] font-semibold py-[16px] leading-6 tracking-[-2%] max-w-[818px] border border-transparent rounded-md">
                Create Group
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PinnedItems;
