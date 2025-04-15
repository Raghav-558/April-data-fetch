"use client";
import { CONTACT_LIST, USER_GUIDES_LIST } from "@/utils/helper";
import { ContactIcon, DeveloperIcon, FaqIcon, SavedIcon } from "@/utils/icons";
import React from "react";

const UserGuides = () => {
  return (
    <div className="w-full max-w-[251px] flex flex-col gap-5 max-xl:max-w-full max-xl:mx-auto max-md:gap-3">
      <div className="w-full">
        <p className="text-xl font-medium leading-[100%] pb-5 text-custom-black max-lg:text-lg max-md:text-base max-md:pb-3">
          User’s Guides
        </p>
        <div className="flex flex-col gap-2 w-full max-xl:flex-row max-xl:flex-wrap">
          {USER_GUIDES_LIST.map((obj, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 py-3 px-3.5 w-full min-w-[251px] bg-gradient-to-r from-[#E7E2FA] to-[#4F02FE00] border-l-2 border-custom-dark-blue"
            >
              <SavedIcon />
              <p className="text-custom-black text-sm font-medium leading-[100%]">
                {obj.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full">
        <p className="text-xl font-medium leading-[100%] pb-5 text-custom-black">
          Contact and Support
        </p>
        <div className="flex flex-col gap-2 w-full">
          {CONTACT_LIST.map((obj, i) => (
            <div
              key={i}
              className="w-full min-w-[251px] bg-gradient-to-r from-[#F1E1F3] to-[#CD0CA700] py-3 px-3.5 gap-2.5 flex items-center border-l-2 border-custom-light-purple"
            >
              {i === 0 ? <FaqIcon /> : <ContactIcon />}
              <p className="text-custom-black text-sm font-medium leading-[100%]">
                {obj.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full">
        <p className="text-xl font-medium leading-[100%] text-custom-black pb-5">
          Others
        </p>
        <div className="w-full min-w-[251px] bg-gradient-to-r from-[#F1E1F3] to-[#CD0CA700] py-3 px-3.5 gap-2.5 flex items-center border-l-2 border-custom-light-purple">
          <DeveloperIcon />
          <p className="text-custom-black text-sm font-medium leading-[100%]">
            DevSecOps Docs
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserGuides;
