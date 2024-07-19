import NewFeed from "./SubComponents/NameLogo";
import OnlinePeople from "./SubComponents/OnlinePeople";
import Groups from "./SubComponents/Groups";
import Controls from "./SubComponents/Controls";

const LefttAside = () => {
  return (
    <>
      <div className=" xl:pt-5 xl:pl-5 xl:pr-5 xl:max-w-[240px] xl:w-[100%] lg:max-w-[224px] lg:w-full lg:border lg:border-y-transparent lg:border-l-transparent md:max-w-[200px] md:w-full md:px-[20px] md:py-[30px]">
        <NewFeed />
        <Controls />
        <OnlinePeople />
        <Groups />
      </div>
    </>
  );
};

export default LefttAside;
