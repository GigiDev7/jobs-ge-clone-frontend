import React from "react";

const Form = ({ type }) => {
  return (
    <div className="flex text-center justify-center h-[100%] py-12 border-[2px] rounded w-[70%] lg:w-[50%] mx-auto items-center bg-[#eff4f6] mt-10">
      <form className="space-y-6 h-[100%] flex flex-col justify-center">
        {type !== "register" ? null : (
          <>
            <div className="flex justify-between">
              <label htmlFor="firstname" className="text-blue-700">
                Firstname:
              </label>
              <input
                id="firstname"
                type="text"
                className="pl-1 border-[1px] outline-0 "
              />
            </div>
            <div className="flex justify-between">
              <label htmlFor="lastname" className="text-blue-700">
                Lastname:
              </label>
              <input
                id="lastname"
                type="text"
                className="pl-1 border-[1px] outline-0 "
              />
            </div>
          </>
        )}
        <div className="flex justify-between">
          <label htmlFor="email" className="text-blue-700">
            Email:
          </label>
          <input
            id="email"
            type="email"
            className="pl-1 border-[1px] outline-0 "
          />
        </div>
        <div className="space-x-4">
          <label htmlFor="password" className="text-blue-700">
            Password:
          </label>
          <input
            id="password"
            type="password"
            className="border-[1px] outline-0 pl-1 "
          />
        </div>
        <div>
          <button className="mt-4 bg-blue-500 py-2 px-2 rounded-sm hover:bg-blue-600">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
