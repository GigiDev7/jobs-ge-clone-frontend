import React from "react";
import { Link } from "react-router-dom";
import formatDate from "../utils/formatDate";

const JobHeader = ({ job }) => {
  const { day, month, nextMonth } = formatDate(job.createdAt);

  return (
    <div className="border-b mt-2 ">
      <div className="w-[90%] mx-auto pb-2 flex justify-between">
        <div className="flex justify-between w-[45%] lg:w-[53%]">
          <Link to={`/${job._id}`} className="text-blue-600 text-sm">
            {job.title}
          </Link>
          <Link
            to={`/company/${job.company}`}
            className="ml-4 text-blue-600 text-sm w-[25%] text-center"
          >
            {job.company}
          </Link>
        </div>
        <div className="flex  justify-between w-[35%] lg:w-[18%] text-center">
          <h1 className="text-blue-600 text-sm w-[35%]">{`${day} ${month}`}</h1>
          <h1 className="text-blue-600 text-sm w-[45%] lg:w-[36%] ">{`${day} ${nextMonth}`}</h1>
        </div>
      </div>
    </div>
  );
};

export default JobHeader;
