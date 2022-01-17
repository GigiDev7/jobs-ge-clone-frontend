import { createRoutesFromChildren } from "react-router-dom";
import { get_jobs, get_job, get_by_company } from "../api/index";

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

export const getByCompany = (companyNamy) => async (dispatch) => {
  try {
    const { data } = await get_by_company(companyNamy);
    dispatch({ type: "GET_BY_COMPANY", payload: data });
  } catch (error) {
    console.log(error.response.data);
  }
};
