"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { TABLE_HEADING_LIST } from "@/utils/helper";
import {
  ArrowBottomIcon,
  ArrowTopIcon,
  DeleteIcon,
  SelectArrowIcon,
} from "@/utils/icons";

const ContentPage = ({ contentData = [] }: any) => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState<any[]>([]);
  const searchParams = useSearchParams();

  useEffect(() => {
    setData(contentData);
    const searchParam = searchParams.get("search");
    if (searchParam) {
      setSearch(searchParam);
    }
  }, [contentData || searchParams]);

  const filteredData = data.filter(
    (obj: any) =>
      obj.name?.toLowerCase().includes(search.toLowerCase()) ||
      obj.country?.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (index: number) => {
    setData((prevData) => prevData.filter((_, i) => i !== index));
  };
  const handleSearchChange = (e: any) => {
    const value = e.target.value;
    setSearch(value);

    const params = new URLSearchParams(window.location.search);
    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }

    window.history.pushState(null, "", `?${params.toString()}`);
  };

  return (
    <div className="bg-white border border-custom-light-gray rounded-md pb-6 pt-2.5 w-full max-w-[969px] max-xl:mx-auto shadow-[0px_16px_53.7px_0px_#4F02FE14]">
      <div className="flex justify-between items-center w-full px-[15px] pb-4 max-md:flex-col max-md:gap-3">
        <div className="flex items-center gap-[10px]">
          <p className="text-sm font-medium leading-[100%] text-custom-black">
            Show
          </p>
          <div className="flex items-center w-[59px] justify-center gap-1 rounded-md cursor-pointer bg-custom-purple">
            <select className="py-1 px-2 outline-none text-white rounded-sm appearance-none cursor-pointer bg-custom-purple">
              <option value="10">10</option>
              <option value="5">5</option>
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="25">25</option>
            </select>
            <div className="-ml-2">
              <SelectArrowIcon />
            </div>
          </div>
          <p className="text-sm font-medium leading-[100%] text-custom-black">
            Enter per page
          </p>
        </div>
        <input
          onChange={handleSearchChange}
          type="text"
          placeholder="Find"
          className="w-full max-w-[320px] outline-none py-3 px-4 placeholder:text-custom-black placeholder:text-sm placeholder:font-medium placeholder:leading-[100%] leading-[100%] text-sm font-medium text-custom-black border-[0.8px] border-[#00000033] rounded-full"
        />
      </div>

      <div className="overflow-auto">
        <table className="w-full">
          <thead>
            <tr className="flex bg-custom-blue">
              {TABLE_HEADING_LIST.map((obj, i) => (
                <th
                  key={i}
                  className={`px-[15px] flex items-center justify-between border-r border-white/20 h-[40px] ${
                    i === 0
                      ? "min-w-[90px]"
                      : i === 1
                      ? "min-w-[235px]"
                      : i === 2
                      ? "min-w-[200px]"
                      : i === 3
                      ? "min-w-[175px]"
                      : "min-w-[260px] border-r-0"
                  }`}
                >
                  <p className="text-sm font-medium text-white leading-[100%]">
                    {obj}
                  </p>
                  <div className="flex flex-col items-center gap-[3px]">
                    <ArrowTopIcon />
                    <ArrowBottomIcon />
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <table>
                  <tbody>
                    {filteredData.map((obj: any, i: number) => (
                      <tr
                        key={i}
                        className="hover:bg-custom-light-red transition-all duration-300"
                      >
                        <td className="pl-[15px] py-[10.5px] min-w-[90px]">
                          <p className="text-xs text-custom-black font-medium leading-[100%]">
                            {obj.alpha_two_code}
                          </p>
                        </td>
                        <td className="pl-[15px] py-[10.5px] min-w-[235px]">
                          <Link
                            href={obj.web_pages}
                            className="text-xs text-custom-black font-medium leading-[100%]"
                          >
                            {obj.web_pages}
                          </Link>
                        </td>
                        <td className="pl-[15px] py-[10.5px] min-w-[200px]">
                          <Link
                            href={obj.domains}
                            className="text-xs text-custom-black font-medium leading-[100%]"
                          >
                            {obj.domains}
                          </Link>
                        </td>
                        <td className="pl-[15px] py-[10.5px] min-w-[175px]">
                          <p className="text-xs text-custom-black font-medium leading-[100%]">
                            {obj.country}
                          </p>
                        </td>
                        <td className="flex items-center justify-between px-[15px] py-[10.5px] min-w-[267px]">
                          <p className="text-xs text-custom-black font-medium leading-[100%]">
                            {obj.name}
                          </p>
                          <button
                            onClick={() => handleDelete(i)}
                            className="cursor-pointer"
                          >
                            <DeleteIcon />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContentPage;
