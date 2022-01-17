import React from "react";
import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
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
  );
};

export default Search;
