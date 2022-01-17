import axios from "axios";

const url = "http://localhost:5000";

export const get_jobs = () => axios.get(`${url}/api/jobs`);
