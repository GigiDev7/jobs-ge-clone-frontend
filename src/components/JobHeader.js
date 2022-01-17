import React from "react";
import { Link } from "react-router-dom";
import formatDate from "../utils/formatDate";

const SingleJob = ({ job }) => {
  const { day, month, nextMonth } = formatDate(job.createdAt);

  return (
    <div className="border-b mt-2">
      <div className="w-[90%] mx-auto pb-2 flex justify-between">
        <Link to={`/${job._id}`} className="text-blue-600 text-sm">
          {job.title}
        </Link>
        <h1 className="ml-4 text-blue-600 text-sm">{job.company}</h1>
        <div className="flex  space-x-20">
          <h1 className="text-blue-600 text-sm ">{`${day} ${month}`}</h1>
          <h1 className="text-blue-600 text-sm">{`${day} ${nextMonth}`}</h1>
        </div>
      </div>
    </div>
  );
};

export default SingleJob;
