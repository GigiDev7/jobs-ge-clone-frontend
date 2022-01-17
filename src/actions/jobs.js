import { get_jobs } from "../api/index";

export const getJobs = () => async (dispatch) => {
  try {
    const { data } = await get_jobs();
    dispatch({ type: "GET_JOBS", payload: data });
  } catch (error) {
    console.log(error.response.data);
  }
};
