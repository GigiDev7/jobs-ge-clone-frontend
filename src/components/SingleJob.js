import React from "react";
import { Link } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
import { AiOutlineBars } from "react-icons/ai";

const SingleJob = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl text-gray-500">single job</h1>
      <div className="mt-6 space-x-6 flex items-center">
        <Link to="/">
          <IoArrowBackSharp className="inline-block font-semibold text-sm text-blue-500" />
          <span className="text-sm font-semibold text-blue-500 ml-1">
            All Jobs
          </span>
        </Link>
        <Link to="/">
          <AiOutlineBars className="inline-block font-bold text-sm text-blue-700" />
          <span className="inline-block ml-1 font-semibold text-sm text-blue-500">
            All Ads by this Company
          </span>
        </Link>
      </div>
      <div className="mt-6 w-10/12 bg-gray-300 border-y-[1px]  border-y-gray-400">
        <p className="border-b-[1px] py-[2px] pl-1 border-b-gray-400 text-sm">
          Title: <span className="font-medium">GGG</span>
        </p>
        <p className="border-b-[1px] py-[2px] pl-1 border-b-gray-400 text-sm">
          Provided By: <span className="font-medium">ggg</span>
        </p>
        <p className="text-sm py-[2px] pl-1">
          Published: <span className="font-medium">12 January</span> / Deadline:{" "}
          <span className="font-medium">12 January</span>
        </p>
      </div>
      <div className="mt-14 w-8/12 lg:w-6/12">
        <p className="">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. Why do we use it? It is a long
          established fact that a reader will be distracted by the readable
          content of a prd McClintock, a Latin pr
        </p>
      </div>
    </div>
  );
};

export default SingleJob;
