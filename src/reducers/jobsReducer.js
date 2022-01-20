const jobsReducer = (state = { jobs: [], job: {}, myjobs: [] }, action) => {
  switch (action.type) {
    case "GET_JOBS":
      return { ...state, jobs: action.payload };

    case "GET_SINGLE_JOB":
      return { ...state, job: action.payload };

    case "GET_BY_COMPANY":
      return { ...state, jobs: action.payload };

    case "GET_BY_CATEGORY":
      return { ...state, jobs: action.payload };

    case "GET_BY_QUERY":
      return { ...state, jobs: action.payload };

    case "GET_MY_JOBS":
      return { ...state, myjobs: action.payload };

    case "POST_JOB":
      return { ...state, myjobs: [...state.myjobs, action.payload] };

    case "UPDATE_JOB":
      return { ...state };

    default:
      return state;
  }
};

export default jobsReducer;
