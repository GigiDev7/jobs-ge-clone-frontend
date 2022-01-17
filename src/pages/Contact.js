import React from "react";
import { ImLocation2 } from "react-icons/im";
import { AiTwotonePhone } from "react-icons/ai";

const Contact = () => {
  return (
    <div className="w-[94%] mx-auto mt-12">
      <div className="bg-[#eff4f6] border-[2px]  rounded pl-4 py-8">
        <p className="text-sm">
          Please send your inquiries, comments and suggestions by e-mail:
          <span className="text-blue-500 text-bold ml-2">
            info@jobs-clone.ge
          </span>
          <br />
          <br />
          For financial matters please contact our Finance Manager at:
          <span className="text-blue-500 text-bold ml-2">
            finance@jobs-clone.ge
          </span>
        </p>
        <div className="flex mt-8 ">
          <p className="text-sm flex items-center">
            <ImLocation2 className="mr-1" /> Georgia,Kutaisi st.6
          </p>
          <p className="text-sm flex items-center ml-10">
            <AiTwotonePhone className="mr-1 text-base" /> +995 555555555
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
