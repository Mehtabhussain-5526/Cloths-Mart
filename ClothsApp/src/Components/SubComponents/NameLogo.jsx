import React from "react";
import { Logo } from "../../../util/logo";

const NameLogo = () => {
  return (
    <>
      <div className="flex gap-[13px] items-center font-light ">
        <Logo className="cursor-pointer" />
        <p className="text-[24px] leading-[24px] cursor-pointer">
          <strong className="font-black">Sale</strong>
          bag
        </p>
      </div>
    </>
  );
};

export default NameLogo;
