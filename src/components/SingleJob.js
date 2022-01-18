import React from "react";
import { Link } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
import { AiOutlineBars } from "react-icons/ai";
import { useSelector } from "react-redux";
import formatDate from "../utils/formatDate";

const SingleJob = () => {
  const { job } = useSelector((state) => state.jobs);
  const { day, month, nextMonth } = formatDate(job.createdAt);

  if (!day) {
    return null;
  }

  return (
    <div>
      <h1 className="font-bold text-2xl text-gray-500">{job.title}</h1>
      <div className="mt-6 space-x-6 flex items-center">
        <Link to="/">
          <IoArrowBackSharp className="inline-block font-semibold text-sm text-blue-500" />
          <span className="text-sm font-semibold text-blue-500 ml-1">
            All Jobs
          </span>
        </Link>
        <Link to={`/company/${job.company}`}>
          <AiOutlineBars className="inline-block font-bold text-sm text-blue-700" />
          <span className="inline-block ml-1 font-semibold text-sm text-blue-500">
            All Ads by this Company
          </span>
        </Link>
      </div>
      <div className="mt-6 w-10/12 bg-gray-300 border-y-[1px]  border-y-gray-400">
        <p className="border-b-[1px] py-[2px] pl-1 border-b-gray-400 text-sm">
          Title: <span className="font-medium">{job.title}</span>
        </p>
        <p className="border-b-[1px] py-[2px] pl-1 border-b-gray-400 text-sm">
          Provided By: <span className="font-medium">{job.company}</span>
        </p>
        <p className="text-sm py-[2px] pl-1">
          Published:{" "}
          <span className="font-medium">
            {day} {month}
          </span>{" "}
          / Deadline:{" "}
          <span className="font-medium">
            {day} {nextMonth}
          </span>
        </p>
      </div>
      <div className="mt-14 w-8/12 lg:w-6/12">
        <p className="">{job.description}</p>
      </div>
    </div>
  );
};

export default SingleJob;
