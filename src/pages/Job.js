import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import SingleJob from "../components/SingleJob";
import { getJob } from "../actions/jobs";
import { useDispatch } from "react-redux";

const Job = () => {
  const dispatch = useDispatch();

  const { jobId } = useParams();

  useEffect(() => {
    dispatch(getJob(jobId));
  }, [dispatch, jobId]);

  return (
    <div className="w-[94%] mx-auto mt-12">
      <SingleJob />
    </div>
  );
};

export default Job;
