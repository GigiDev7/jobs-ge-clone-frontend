import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
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
      <nav className="w-[94%] h-14 mx-auto text-white bg-blue-500 mt-16 flex items-center justify-around rounded-md">
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
      </nav>
    </div>
  );
};

export default Navbar;
