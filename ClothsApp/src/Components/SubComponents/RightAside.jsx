import React from "react";

const RightAside = () => {
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
      {/* Side div */}
      <div className="xl:max-w-[180px]  xl:flex-none xl:flex-col xl:pl-[15px] xl:pr-[15px] md:flex md:flex-row-reverse md:justify-between md:pl-[30px] md:pr-[30px]">
        <div>
          <img
            className=" mt-[50px] lg:mb-[50px]"
            src="/src/assets/images/banners/ideas-vertical.png"
          />
        </div>
        <div className="xl:max-w-[150px] xl:mt-[30px] md:mt-[50px] lg:mr-0 md:pr-8">
          <p className="leading-[19px] font-bold lg:mb-5 md:mb-4">
            Today's news
          </p>
          {questions.map((data, index) => (
            <div id={index} className="">
              <p className="leading-[19px] font-medium text-[14px]">
                {data.statement}
              </p>
              <p className="leading-[19px] font-medium text-[14px] text-[#595959] lg:mb-5 md:mb-4">
                {data.time}
              </p>
            </div>
          ))}
          <p className="text-[#595959] text-[14px] leading-6">
            ... View all latest news
          </p>
        </div>
      </div>
    </>
  );
};

export default RightAside;
