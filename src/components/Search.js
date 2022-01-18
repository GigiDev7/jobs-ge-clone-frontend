import React, { useRef } from "react";
import { BiSearch } from "react-icons/bi";

import { getByCategory, getJobs } from "../actions/jobs";
import { useDispatch } from "react-redux";

const Search = () => {
  const categoryRef = useRef();
  const dispatch = useDispatch();

  const handleChange = () => {
    if (categoryRef.current.value === "All Categories") {
      dispatch(getJobs());
    }

    dispatch(getByCategory(categoryRef.current.value));
  };

  return (
    <div className="space-x-6 relative flex justify-end">
      <select
        ref={categoryRef}
        onChange={handleChange}
        className=" w-44 bg-gray-100 text-xs py-1 px-2 border-[1px] rounded-[3px] outline-0"
      >
        <option>All Categories</option>
        <option value="Informational technologies">
          Informational technologies
        </option>
        <option value="Finance">Finance</option>
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
