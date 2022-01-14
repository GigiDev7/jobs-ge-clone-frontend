import React from "react";

const SingleJob = () => {
  return (
    <div className="border-b mt-2">
      <div className="w-[90%] mx-auto pb-2 flex justify-between">
        <h1 className="text-blue-600 text-sm">single job</h1>
        <h1 className="ml-4 text-blue-600 text-sm">provided</h1>
        <div className="flex space-x-20">
          <h1 className="text-blue-600 text-sm">published</h1>
          <h1 className="text-blue-600 text-sm ">deadline</h1>
        </div>
      </div>
    </div>
  );
};

export default SingleJob;
