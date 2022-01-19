import React, { useEffect, useState } from "react";
import DashboardHeader from "../components/DashboardHeader";
import JobCard from "../components/JobCard";
import Modal from "../components/Modal";

import { useDispatch, useSelector } from "react-redux";
import { getMyJobs } from "../actions/jobs";

const Dashboard = () => {
  const [isModalShown, setIsModalShown] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { myjobs } = useSelector((state) => state.jobs);

  useEffect(() => {
    dispatch(getMyJobs(user?.token));
  }, [dispatch, user?.token]);

  return (
    <div className="w-[90%] mx-auto mt-12">
      <DashboardHeader setIsModalShown={setIsModalShown} />
      {myjobs.length < 1 && (
        <p className="mt-16 text-center font-semibold">No Jobs Found!</p>
      )}
      {myjobs.map((job) => (
        <JobCard job={job} setIsModalShown={setIsModalShown} />
      ))}
      {isModalShown && <Modal setIsModalShown={setIsModalShown} />}
    </div>
  );
};

export default Dashboard;
