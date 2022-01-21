import { login_post, signup_post } from "../api";

export const login = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await login_post(formData);
    dispatch({ type: "LOGIN", payload: data });
    localStorage.setItem("user", JSON.stringify(data));
    navigate("/", { replace: true });
  } catch (error) {
    dispatch({ type: "ERROR", payload: error.response.data });
  }
};

export const signup = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await signup_post(formData);
    dispatch({ type: "SIGN_UP", payload: data });
    localStorage.setItem("user", JSON.stringify(data));
    navigate("/", { replace: true });
  } catch (error) {
    console.log(error.response.data);
  }
};
