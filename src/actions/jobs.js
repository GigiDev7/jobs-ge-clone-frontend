import {
  get_jobs,
  get_job,
  get_by_company,
  get_by_category,
  get_by_query,
  get_my_jobs,
  post_job,
  update_job,
  delete_job,
} from "../api/index";

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

export const getByCategory = (category) => async (dispatch) => {
  try {
    const { data } = await get_by_category(category);
    dispatch({ type: "GET_BY_CATEGORY", payload: data });
  } catch (error) {
    console.log(error.response.data);
  }
};

export const getByQuery = (query) => async (dispatch) => {
  try {
    const { data } = await get_by_query(query);
    dispatch({ type: "GET_BY_QUERY", payload: data });
  } catch (error) {
    console.log(error.response.data);
  }
};

export const getMyJobs = (token) => async (dispatch) => {
  try {
    const { data } = await get_my_jobs(token);
    dispatch({ type: "GET_MY_JOBS", payload: data });
  } catch (error) {
    console.log(error.response.data);
  }
};

export const postJob = (token, jobData) => async (dispatch) => {
  try {
    const { data } = await post_job(token, jobData);
    dispatch({ type: "POST_JOB", payload: data });
  } catch (error) {
    console.log(error.response.data);
  }
};

export const updateJob = (token, jobId, jobData) => async (dispatch) => {
  try {
    await update_job(token, jobId, jobData);
    dispatch({ type: "UPDATE_JOB" });
  } catch (error) {
    console.log(error.response.data);
  }
};

export const deleteJob = (token, jobId) => async (dispatch) => {
  try {
    await delete_job(token, jobId);
    dispatch({ type: "DELETE_JOB" });
  } catch (error) {
    console.log(error.response.daata);
  }
};
