import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signup, login } from "../actions/user";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const Form = ({ type }) => {
  const [isPasswordShown, setIsPasswordShown] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleIconClick = () => {
    setIsPasswordShown((prevState) => !prevState);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    dispatch(login({ email, password }, navigate));
  };

  return (
    <div className="flex text-center justify-center h-[100%] py-12 border-[2px] rounded w-[70%] lg:w-[50%] mx-auto items-center bg-[#eff4f6] mt-10">
      <form
        onSubmit={handleFormSubmit}
        className="space-y-6 h-[100%] flex flex-col justify-center"
      >
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
            ref={emailRef}
            id="email"
            type="email"
            className="pl-1 border-[1px] outline-0 "
          />
        </div>
        <div className="space-x-4 relative">
          <label htmlFor="password" className=" text-blue-700">
            Password:
          </label>
          <input
            ref={passwordRef}
            id="password"
            type={isPasswordShown ? "text" : "password"}
            className="border-[1px] outline-0 pl-1 "
          />
          {!isPasswordShown ? (
            <AiFillEye
              onClick={handleIconClick}
              className="absolute top-1 right-2 cursor-pointer text-lg"
            />
          ) : (
            <AiFillEyeInvisible
              onClick={handleIconClick}
              className="absolute top-1 right-2 cursor-pointer text-lg"
            />
          )}
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
