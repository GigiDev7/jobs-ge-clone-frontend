import React from "react";
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";

import { deleteJob, getMyJobs } from "../actions/jobs";
import { useSelector, useDispatch } from "react-redux";

const JobCard = ({ job, setIsModalShown, setEventType, setJob }) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleEditClick = () => {
    setEventType("update");
    setJob(job);
    setIsModalShown(true);
  };

  const handleDeleteClick = () => {
    dispatch(deleteJob(user.token, job._id));
    dispatch(getMyJobs(user.token));
  };

  return (
    <div className="flex justify-between items-center mt-12 bg-gray-200 hover:bg-gray-300 py-4 px-4 rounded-md lg:w-[60%] mx-auto">
      <h1 className="font-semibold">
        {job.title} - {job.company}
      </h1>
      <div className="flex space-x-4">
        <AiFillEdit
          onClick={handleEditClick}
          className="text-xl text-blue-600 cursor-pointer"
        />
        <MdDelete
          onClick={handleDeleteClick}
          className="text-xl text-red-600 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default JobCard;
