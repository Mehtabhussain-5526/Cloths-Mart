import React from "react";
import Nav from "./SubComponents/Nav";
import GridSection from "./SubComponents/GridSection";
import LefttAside from "./LeftAside";
import PinnedItemGrid from "./SubComponents/PinnedItemGrid";
import { CloseSignWithPurpleBG } from "../../util/logo";
const PinnedItems = () => {
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
          <div className="border border-r-transparent border-b-transparent border-l-transparent pl-[80px] xl:pt-[47px] pb-[100px] md:px-[20px] xl:pl-[40px] xl:pr-[50px] md:pt-[20px] mb:px-[35px]">
            {/* title and selction btn */}
            <div className="md:block mb:hidden">
              <div className="flex justify-between items-center mb-[50px] max-w-[1000px]">
                <div className="">
                  <p className=" text-[#808191]  xl:text-[24px] xl:font-normal xl:leading-6 xl:tracking-tighter lg:text-[20px] lg:mt-[20px] lg:font-normal lg:leading-6 lg:tracking-tighter lg:max-w-fit md:text-[20px]  md:font-normal md:leading-6 md:tracking-tighter md:max-w-fit">
                    Salesbag
                  </p>
                  <p className="xl:text-[48px] xl:font-semibold xl:leading-[56px] xl:tracking-tighter lg:mb-[35px] lg:text-[35px] md:font-semibold lg:leading-[56px] lg:tracking-tighter lg:max-w-fit md:text-[30px] md:leading-[30px] ">
                    Pinned Items
                  </p>
                </div>
                <div className="items-end">
                  <ul>
                    <li className="font-normal leading-5 tracking-tighter mt-[50px] hover:text-[#6151FF] underline">
                      Select pinned items
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between py-[20px] md:hidden">
              <div className="">
                {" "}
                <p className="text-[16px] font-semibold leading-6 tracking-tighter">
                  10 Pinned Items
                </p>{" "}
              </div>
              <div className="flex items-center gap-[7px]">
                <button className="bg-[#6151ff] text-white border border-transparent rounded-[5000px] px-[15px] py-[5px] mb:text-[13px] font-light text-center tracking-tighter">
                  Start New Chat
                </button>
                <button className="flex items-center justify-center gap-[10px] text-center px-[15px] py-[5px] border border-[#6151ff] rounded-[5000px] text-[#6151ff] font-light mb:text-[13px] tracking-tighter">
                  <CloseSignWithPurpleBG />
                  Cancel
                </button>
              </div>
            </div>
            {/* collection */}
            <div className=" max-w-[1000px]">
              <PinnedItemGrid />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PinnedItems;
