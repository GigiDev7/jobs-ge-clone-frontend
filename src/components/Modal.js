import React, { useState, useEffect } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

import { postJob } from "../actions/jobs";
import { useSelector, useDispatch } from "react-redux";

const Modal = ({ setIsModalShown, eventType, job }) => {
  const [formInput, setFormInput] = useState({
    title: "",
    company: "",
    category: "",
    description: "",
  });
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (eventType === "update") {
      const { title, company, category, description } = job;
      setFormInput({ title, company, category, description });
    }
  }, [eventType, job]);

  const handleInputChange = (e) => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (eventType === "create") {
      dispatch(postJob(user.token, formInput));
    }
    setIsModalShown(false);
  };

  return (
    <div className="absolute flex justify-between bg-blue-500 top-[55%] left-2/4 -translate-x-[50%] -translate-y-[55%] z-50 w-5/6 h-5/6 lg:w-5/6 shadow-lg shadow-black rounded-md">
      <div className="mt-16 pl-4 w-[100%] lg:w-[70%] lg:mx-auto">
        <form onSubmit={handleFormSubmit} className="flex flex-col space-y-6 ">
          <div className="flex justify-between">
            <label className="font-semibold w-[25%]" htmlFor="title">
              Title:
            </label>
            <input
              name="title"
              onChange={handleInputChange}
              value={formInput.title}
              className="outline-0 w-[100%]"
              id="title"
              type="text"
            />
          </div>
          <div className="flex justify-between">
            <label className="font-semibold w-[25%]" htmlFor="company">
              Company:
            </label>
            <input
              name="company"
              onChange={handleInputChange}
              value={formInput.company}
              className="outline-0 w-[100%]"
              id="company"
              type="text"
            />
          </div>
          <div className="flex ">
            <label className="font-semibold w-[20%]" htmlFor="category">
              Category:
            </label>
            <select
              name="category"
              onChange={handleInputChange}
              value={formInput.category}
              className="text-sm px-2 outline-0"
            >
              <option>Select category</option>
              <option>Informational technologies</option>
              <option>Finance</option>
            </select>
          </div>
          <div className="flex justify-between">
            <label className="font-semibold w-[25%]" htmlFor="description">
              Description:
            </label>
            <textarea
              name="description"
              onChange={handleInputChange}
              value={formInput.description}
              rows="8"
              className="w-[100%] outline-0 px-1"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="mt-8 bg-white py-2 px-3 rounded-sm hover:bg-gray-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div>
        <AiOutlineCloseCircle
          onClick={() => setIsModalShown(false)}
          className="text-white font-bold text-2xl cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Modal;
