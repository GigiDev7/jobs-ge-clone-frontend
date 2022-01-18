const jobsReducer = (state = { jobs: [], job: {} }, action) => {
  switch (action.type) {
    case "GET_JOBS":
      return { ...state, jobs: action.payload };

    case "GET_SINGLE_JOB":
      return { ...state, job: action.payload };

    case "GET_BY_COMPANY":
      return { ...state, jobs: action.payload };

    case "GET_BY_CATEGORY":
      return { ...state, jobs: action.payload };

    default:
      return state;
  }
};

export default jobsReducer;
