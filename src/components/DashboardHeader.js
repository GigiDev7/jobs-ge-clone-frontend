import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import { BiArrowBack } from "react-icons/bi";

const DashboardHeader = ({ setIsModalShown }) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
    navigate("/", { replace: true });
  };

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <>
      <div className="flex justify-between">
        <h1
          onClick={handleBackClick}
          className="flex font-semibold text-xl items-center cursor-pointer"
        >
          <BiArrowBack className="mr-2 mt-1 text-blue-500 text-2xl" /> Back to
          jobs
        </h1>
        <div className="flex">
          <div className=" flex justify-center items-center mr-2 w-16 h-16 rounded-[50%] border-2 border-blue-500">
            <span className="font-semibold">{user?.firstname[0]}</span>
            <span className="font-semibold">{user?.lastname[0]}</span>
          </div>
          <h1
            onClick={handleLogoutClick}
            className="cursor-pointer font-semibold text-xl flex items-center"
          >
            {user?.email}{" "}
            <IoIosLogOut className="ml-2 mt-1 text-blue-500 text-2xl" />
          </h1>
        </div>
      </div>
      <h1 className="text-center mt-16 font-semibold text-2xl">My Jobs</h1>
      <div className="flex justify-center">
        <button
          onClick={() => setIsModalShown(true)}
          className=" mt-12 bg-blue-500 py-2 px-3 hover:bg-blue-700 rounded-sm"
        >
          Post a job!
        </button>
      </div>
    </>
  );
};

export default DashboardHeader;
