import { combineReducers } from "redux";
import jobsReducer from "./jobsReducer";
import authReducer from "./authReducer";

export default combineReducers({
  jobs: jobsReducer,
  auth: authReducer,
});
