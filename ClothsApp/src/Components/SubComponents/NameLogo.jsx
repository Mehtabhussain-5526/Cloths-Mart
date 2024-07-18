import { Logo } from "../../../util/logo";

const NameLogo = () => {
  return (
    <>
      <div className="flex gap-[13px] items-center font-light md:max-w-fit md:mt-[20px] md:ml-[35px]">
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
