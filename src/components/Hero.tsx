import React from "react";
import UserGuides from "./UserGuides";
import TableContent from "./TableContent";

const Hero = ({ heroContent }: any) => {
  return (
    <div className="pt-[139px] pb-[62px] flex items-center justify-center max-xl:py-[60px] max-lg:py-10">
      <div className="w-full max-w-[1272px] px-4 mx-auto flex justify-center items-center flex-col max-xl:max-w-[969px]">
        <div className="flex items-center justify-between w-full max-lg:px-4 max-md:flex-col max-md:gap-3">
          <h1 className="text-[32px] font-semibold leading-[100%] max-lg:text-2xl max-md:text-2xl">
            My DevOps Spaces
          </h1>
          <button className="py-3.5 px-4 button-bg text-white rounded-xs cursor-pointer text-base font-medium leading-[100%] max-md:text-sm hover:scale-95 transition-all duration-300">
            Create a DevOps Space (1 left)
          </button>
        </div>
        <div className="pt-11 gap-5 max-lg:pt-8 max-md:pt-5 flex justify-between items-start w-full max-xl:flex-col max-xl:justify-center max-xl:gap-10">
          <UserGuides />
          <TableContent contentData={heroContent} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
