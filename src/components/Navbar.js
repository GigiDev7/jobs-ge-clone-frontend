import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { RiProfileLine } from "react-icons/ri";
import { IoMdHelpCircle } from "react-icons/io";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { motion } from "framer-motion";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const [isShown, setIsShown] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const handleShow = () => {
    setIsShown((prevState) => !prevState);
  };

  const handleLogout = () => {
    setIsShown(false);
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
  };

  const handleProfileClick = () => {
    navigate("/dashboard");
    setIsShown(false);
  };

  if (location.pathname === "/dashboard") {
    return null;
  }

  return (
    <div className="mt-8">
      <div className="flex items-center ml-10">
        <Link to="/" className="flex items-center">
          <FaPaperPlane className="text-5xl text-blue-700" />
          <p className="text-5xl font-medium border-r-2 ml-3 pr-3">
            <span className=" text-blue-700 ">jobs.</span>ge
          </p>
        </Link>
        <p className="pl-3 w-[200px] text-gray-500">
          Connecting professionals and employers since 1998
        </p>
      </div>
      <nav className="w-[94%] h-14 mx-auto text-white bg-blue-500 mt-16 flex items-center justify-around rounded-md relative">
        <div className="space-x-4">
          <NavLink
            to="/"
            className={(navData) =>
              navData.isActive
                ? "bg-gray-300 text-black py-[17px] px-4"
                : "link"
            }
          >
            Jobs
          </NavLink>
          <NavLink
            to="/about"
            className={(navData) =>
              navData.isActive
                ? "bg-gray-300 text-black py-[17px] px-4"
                : "link"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={(navData) =>
              navData.isActive
                ? "bg-gray-300 text-black py-[17px] px-4"
                : "link"
            }
          >
            Contact
          </NavLink>
        </div>
        {user ? (
          <p onClick={handleShow} className="cursor-pointer">
            <BsFillPersonFill className="text-2xl inline-block" /> {user.email}
          </p>
        ) : (
          <div className="space-x-4">
            <NavLink
              className={(navData) =>
                navData.isActive
                  ? "bg-gray-300 text-black py-[17px] px-4"
                  : "link"
              }
              to="/login"
            >
              Login
            </NavLink>
            <NavLink
              className={(navData) =>
                navData.isActive
                  ? "bg-gray-300 text-black py-[17px] px-4"
                  : "link"
              }
              to="/register"
            >
              Register
            </NavLink>
          </div>
        )}
        {isShown && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ y: [-5, 0], opacity: 1 }}
              className="triangle lg:right-64"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ y: [-5, 0], opacity: 1 }}
              className=" pt-2 absolute top-14 right-28 lg:right-56 w-52 h-[13rem] bg-white shadow-md rounded-md shadow-black z-10"
            >
              <h1 className="text-black font-semibold pl-2">
                {user?.firstname} {user?.lastname}
              </h1>
              <p
                onClick={handleProfileClick}
                className="cursor-pointer mt-4 pl-2 flex items-center hover:bg-gray-200 py-2"
              >
                <RiProfileLine className="text-black text-xl inline-block" />{" "}
                <span className="text-black ml-4 font-semibold">Profile</span>
              </p>
              <p className="pl-2 py-2 flex items-center hover:bg-gray-200">
                <IoMdHelpCircle className="text-black text-xl inline-block" />
                <span className="text-black ml-4 font-semibold">
                  Help Center
                </span>
              </p>
              <button
                onClick={handleLogout}
                className="text-black w-[100%] text-center mt-8 hover:bg-gray-200 py-2 border-t"
              >
                Sign out
              </button>
            </motion.div>
          </>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
