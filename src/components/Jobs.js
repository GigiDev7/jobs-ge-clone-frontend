import React from "react";
import { BiSearch } from "react-icons/bi";
import SingleJob from "./SingleJob";

const Jobs = () => {
  return (
    <div className=" mt-10 w-[94%] mx-auto">
      <div className="space-x-6 relative flex justify-end">
        <select className=" w-44 bg-gray-100 text-xs py-1 px-2 border-[1px] rounded-[3px] outline-0">
          <option>All Categories</option>
          <option>1</option>
          <option>1</option>
        </select>
        <input
          type="search"
          className="bg-gray-100 w-60 border-[1px] rounded-[3px] relative"
        />
        <BiSearch className="absolute top-1 right-1 cursor-pointer" />
      </div>
      <div className="flex justify-between w-[90%] mx-auto  mt-32 font-semibold ">
        <p>Advertisements</p>
        <p>Provided By</p>
        <div className="flex space-x-16">
          <p>Published</p>
          <p>Deadline</p>
        </div>
      </div>
      <div className="mt-8">
        <SingleJob />
        <SingleJob />
      </div>
    </div>
  );
};

export default Jobs;
