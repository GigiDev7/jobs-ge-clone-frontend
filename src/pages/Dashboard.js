import React from "react";
import DashboardHeader from "../components/DashboardHeader";
import JobCard from "../components/JobCard";

const Dashboard = () => {
  return (
    <div className="w-[90%] mx-auto mt-12">
      <DashboardHeader />
      <JobCard />
    </div>
  );
};

export default Dashboard;
