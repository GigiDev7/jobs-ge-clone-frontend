import React from "react";
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";

const JobCard = ({ job }) => {
  return (
    <div className="flex justify-between items-center mt-12 bg-gray-200 py-4 px-4 rounded-md lg:w-[60%] mx-auto">
      <h1 className="font-semibold">
        {job.title} - {job.company}
      </h1>
      <div className="flex space-x-4">
        <AiFillEdit className="text-xl text-blue-600" />
        <MdDelete className="text-xl text-red-600" />
      </div>
    </div>
  );
};

export default JobCard;
