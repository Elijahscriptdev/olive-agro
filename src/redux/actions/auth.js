import axios from "axios";
import { setAlert } from "./alert";

export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";

export const USER_LOADED = "USER_LOADED";
export const AUTH_ERROR = "AUTH_ERROR";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const FORGOT_PASSWORD_SUCCESS = "FORGOT_PASSWORD_SUCCESS";
export const FORGOT_PASSWORD_FAIL = "FORGOT_PASSWORD_FAIL";

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
      "https://www.api.oliveagro.org/api/auth/getUser",
      config
    );
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Register User
export const register = ({
  firstName,
  lastName,
  email,
  phoneNumber,
  password,
}) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({
    firstName,
    lastName,
    email,
    phoneNumber,
    password,
  });

  try {
    const res = await axios.post(
      "https://www.api.oliveagro.org/api/users/create/user",
      body,
      config
    );
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
    dispatch(setAlert("Registration Successful", "success"));
  } catch (error) {
    if (error.response.data.message) {
      dispatch(setAlert(error.response.data.message, "danger"));
    }
    dispatch({
      type: REGISTER_FAIL,
    });
    return error
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
      "https://www.api.oliveagro.org/api/auth/login",
      body,
      config
    );
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
    dispatch(setAlert("Login Successful", "success"));
  } catch (error) {
    if (error.response.data.message) {
      dispatch(setAlert(error.response.data.message, "danger"));
    }
    dispatch({
      type: LOGIN_FAIL,
    });
    return error;
  }
};

// Forgot password
export const forgotPassword = ({ email }) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ email });

  try {
    const res = await axios.post(
      "https://www.api.oliveagro.org/api/auth/forgot-password",
      body,
      config
    );
    dispatch({
      type: FORGOT_PASSWORD_SUCCESS,
      payload: res.data,
    });
    dispatch(setAlert(res.data.message, "success"));
  } catch (error) {
    if (error.response.data.message) {
      dispatch(setAlert(error.response.data.message, "danger"));
    }
    dispatch({
      type: FORGOT_PASSWORD_FAIL,
    });
    return error;
  }
};


// LOGOUT
export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
