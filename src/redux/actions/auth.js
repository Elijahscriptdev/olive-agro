import axios from "axios";

export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";

export const USER_LOADED = "USER_LOADED";
export const AUTH_ERROR = "AUTH_ERROR";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const LOGOUT = "LOGOUT";

// LOAD user
export const loadUser = () => async (dispatch) => {
  const token = localStorage.getItem("token");

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const res = await axios.get(
      "https://travel-backend-api.herokuapp.com/auto_login",
      config
    );
    if (res.data.errors === "No User Logged In") {
      const errorArr = { Failure: [[res.data]] };
      dispatch({
        type: AUTH_ERROR,
        payload: errorArr,
      });
    } else {
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    }
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Register User
export const register = ({ first_name, last_name, email, password }) => async (
  dispatch
) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ first_name, last_name, email, password });

  try {
    const res = await axios.post(
      "https://travel-backend-api.herokuapp.com/users",
      body,
      config
    );
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (error) {
    // dispatch(setAlert(error.response.data.errors, "danger"));
    console.log(error.response.data.errors);
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

// Login User
export const login = ({ email, password }) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post(
      "https://travel-backend-api.herokuapp.com/login",
      body,
      config
    );
    if (res.data.failure === "Log in failed! Username or password invalid!") {
      const errorArr = { Failure: [[res.data]] };
      dispatch({
        type: LOGIN_FAIL,
        payload: errorArr,
      });
    } else {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    }
    dispatch(loadUser());
  } catch (error) {
    // dispatch(setAlert(error.response.data.errors, "danger"));
    console.log(error.response.data.errors);
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

// LOGOUT
export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
