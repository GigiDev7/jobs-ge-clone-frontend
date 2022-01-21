import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signup, login } from "../actions/user";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const Form = ({ type }) => {
  const [isPasswordShown, setIsPasswordShown] = useState();
  const [areFieldsComplete, setAreFieldsComplete] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { errors } = useSelector((state) => state.auth);

  const emailRef = useRef();
  const passwordRef = useRef();
  const firstnameRef = useRef();
  const lastnameRef = useRef();

  useEffect(() => {
    dispatch({ type: "ERROR", payload: {} });
  }, [dispatch]);

  const handleIconClick = () => {
    setIsPasswordShown((prevState) => !prevState);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    dispatch(login({ email, password }, navigate));
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    setAreFieldsComplete(true);
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const firstname = firstnameRef.current.value;
    const lastname = lastnameRef.current.value;

    if (firstname === "" || lastname === "") {
      setAreFieldsComplete(false);
      return;
    }

    dispatch(signup({ email, password, firstname, lastname }, navigate));
  };

  return (
    <div className="flex text-center justify-center h-[100%] py-12 border-[2px] rounded w-[70%] lg:w-[50%] mx-auto items-center bg-[#eff4f6] mt-10">
      <form
        onSubmit={
          type === "register" ? handleRegisterSubmit : handleLoginSubmit
        }
        className="space-y-6 h-[100%] flex flex-col justify-center"
      >
        {type !== "register" ? null : (
          <>
            <div className="flex justify-between relative">
              <label htmlFor="firstname" className="text-blue-700">
                Firstname:
              </label>
              <input
                ref={firstnameRef}
                id="firstname"
                type="text"
                className="pl-1 border-[1px] outline-0 "
              />
              {!areFieldsComplete && (
                <span className="absolute w-[100%] -top-8 left-[15%] text-sm text-red-600">
                  Please fill all fields
                </span>
              )}
              {errors && areFieldsComplete && (
                <span className="absolute w-[100%] -top-8 left-[15%] text-sm text-red-600">
                  {errors?.email ? errors.email : errors.password}
                </span>
              )}
            </div>
            <div className="flex justify-between">
              <label htmlFor="lastname" className="text-blue-700">
                Lastname:
              </label>
              <input
                ref={lastnameRef}
                id="lastname"
                type="text"
                className="pl-1 border-[1px] outline-0 "
              />
            </div>
          </>
        )}
        <div className="flex justify-between relative">
          <label htmlFor="email" className="text-blue-700">
            Email:
          </label>
          <input
            ref={emailRef}
            id="email"
            type="email"
            className="pl-1 border-[1px] outline-0 "
          />
          {errors?.message && type !== "register" && (
            <span className="absolute w-[100%] -top-8 left-[15%] text-sm text-red-600">
              {errors.message}!
            </span>
          )}
        </div>
        <div className="space-x-4 relative">
          <label htmlFor="password" className=" text-blue-700">
            Password:
          </label>
          <input
            minLength={6}
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
