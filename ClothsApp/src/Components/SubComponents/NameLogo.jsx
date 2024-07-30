import { Link } from "react-router-dom";
import { Logo } from "../../../util/logo";

const NameLogo = () => {
  return (
    <>
      <Link to="/">
        <div className="flex gap-[13px] items-center font-light md:max-w-fit md:mt-[6px] xl:ml-[40px] md:ml-[10px] cursor-pointer">
          <Logo className="cursor-pointer" />
          <p className="text-[24px] leading-[24px] cursor-pointer">
            <strong className="font-black">Sale</strong>
            bag
          </p>
        </div>
      </Link>
    </>
  );
};

export default NameLogo;
