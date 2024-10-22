import NewFeed from "./SubComponents/NameLogo";
import OnlinePeople from "./SubComponents/OnlinePeople";
import Groups from "./SubComponents/Groups";
import Controls from "./SubComponents/Controls";

const LefttAside = () => {
  return (
    <>
      <div className=" xl:pt-5 xl:pl-5 xl:pr-5 xl:w-[240px]  md:w-[200px] md:px-[20px] md:py-[30px] md:block mb:hidden">
        <NewFeed />
        <Controls />
        <OnlinePeople />
        <Groups />
      </div>
    </>
  );
};

export default LefttAside;
