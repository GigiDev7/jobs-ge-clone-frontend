import React from "react";
import { Link } from "react-router-dom";

const formatDate = (str) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date(str);
  const day = date.getDate();
  const monthNum = date.getMonth();
  const month = monthNames[monthNum];
  const nextMonth = monthNames[monthNum + 1];

  return { day, month, nextMonth };
};
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
