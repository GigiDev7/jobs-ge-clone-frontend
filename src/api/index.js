import axios from "axios";

const url = "http://localhost:5000";

export const get_jobs = () => axios.get(`${url}/api/jobs`);
export const get_job = (jobId) => axios.get(`${url}/api/jobs/${jobId}`);
export const get_by_company = (companyName) =>
  axios.get(`${url}/api/jobs/company/${companyName}`);
