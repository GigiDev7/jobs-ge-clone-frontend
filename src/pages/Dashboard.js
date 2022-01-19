import React, { useEffect, useState } from "react";
import DashboardHeader from "../components/DashboardHeader";
import JobCard from "../components/JobCard";
import Modal from "../components/Modal";

import { useDispatch, useSelector } from "react-redux";
import { getMyJobs } from "../actions/jobs";

const Dashboard = () => {
  const [isModalShown, setIsModalShown] = useState(false);
  const [eventType, setEventType] = useState("");
  const [job, setJob] = useState({});
  const dispatch = useDispatch();

  const { myjobs } = useSelector((state) => state.jobs);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    dispatch(getMyJobs(user.token));
  }, [dispatch]);

  return (
    <div className="w-[90%] mx-auto mt-12">
      <DashboardHeader
        setEventType={setEventType}
        setIsModalShown={setIsModalShown}
      />
      {myjobs.length < 1 && (
        <p className="mt-16 text-center font-semibold">No Jobs Found!</p>
      )}
      {myjobs.map((job) => (
        <JobCard
          setEventType={setEventType}
          key={job._id}
          job={job}
          setIsModalShown={setIsModalShown}
          setJob={setJob}
        />
      ))}
      {isModalShown && (
        <Modal
          job={job}
          eventType={eventType}
          setIsModalShown={setIsModalShown}
        />
      )}
    </div>
  );
};

export default Dashboard;
