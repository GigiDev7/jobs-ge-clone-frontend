import React from "react";
import { useParams } from "react-router-dom";
import SingleJob from "../components/SingleJob";

const Job = () => {
  return (
    <div className="w-[94%] mx-auto mt-12">
      <SingleJob />
    </div>
  );
};

export default Job;
