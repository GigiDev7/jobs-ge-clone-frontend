import { createRoutesFromChildren } from "react-router-dom";
import { get_jobs, get_job } from "../api/index";

export const getJobs = () => async (dispatch) => {
  try {
    const { data } = await get_jobs();
    dispatch({ type: "GET_JOBS", payload: data });
  } catch (error) {
    console.log(error.response.data);
  }
};

export const getJob = (jobId) => async (dispatch) => {
  try {
    const { data } = await get_job(jobId);
    dispatch({ type: "GET_SINGLE_JOB", payload: data });
  } catch (error) {
    console.log(error.response.data);
  }
};
