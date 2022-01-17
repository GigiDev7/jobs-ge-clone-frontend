import React, { useEffect } from "react";
import Jobs from "../components/Jobs";

import { useSelector, useDispatch } from "react-redux";
import { getByCompany } from "../actions/jobs";
import { useParams } from "react-router-dom";

const CompanyJobs = () => {
  const dispatch = useDispatch();
  const { companyName } = useParams();
  const { jobs } = useSelector((state) => state.jobs);

  useEffect(() => {
    dispatch(getByCompany(companyName));
  }, [dispatch, companyName]);

  return (
    <div className="w-[94%] mx-auto mt-10">
      <Jobs jobs={jobs} />
    </div>
  );
};

export default CompanyJobs;
