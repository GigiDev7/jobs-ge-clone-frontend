const authReducer = (state = { user: null }, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };

    case "SIGN_UP":
      return { ...state, user: action.payload };

    case "LOGOUT":
      return { ...state, user: null };

    default:
      return state;
  }
};

export default authReducer;
