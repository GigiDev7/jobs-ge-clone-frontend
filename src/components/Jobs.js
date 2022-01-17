import React from "react";
import JobHeader from "./JobHeader";

const Jobs = ({ jobs }) => {
  return (
    <div className="">
      <div className="flex justify-between w-[90%] mx-auto  mt-32 font-semibold ">
        <p>Advertisements</p>
        <p>Provided By</p>
        <div className="flex space-x-16">
          <p className="">Published</p>
          <p>Deadline</p>
        </div>
      </div>
      <div className="mt-8">
        {jobs.map((job) => (
          <JobHeader key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default Jobs;
