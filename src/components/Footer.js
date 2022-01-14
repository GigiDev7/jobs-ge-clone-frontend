import React from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="flex flex-col items-end pb-16 space-y-4 w-[94%] mx-auto border-t-2 border-blue-600 mt-28">
      <p className="mt-8 text-sm font-semibold flex items-center">
        <AiOutlineCopyrightCircle className="mr-[1px]" />
        1998-2022 JOBS.GE - Jobs,Competitions, Trainings. All rights reserved.
      </p>
      <p className="text-[0.8rem] text-gray-800 font-medium">
        Web Development: Gigi
      </p>
    </div>
  );
};

export default Footer;
