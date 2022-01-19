import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
    navigate("/", { replace: true });
  };

  return (
    <div>
      <h1
        onClick={handleClick}
        className="cursor-pointer font-semibold text-xl flex items-center"
      >
        {user?.email}{" "}
        <IoIosLogOut className="ml-2 mt-1 text-blue-500 text-2xl" />
      </h1>
    </div>
  );
};

export default Dashboard;
