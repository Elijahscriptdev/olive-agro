import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "../actions/auth";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  loading: true,
  user: null,
  admin: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
        admin: payload.admin,
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.users.token);
      localStorage.setItem("user", JSON.stringify(payload.users));
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
        admin: payload.admin,
      };
    case REGISTER_FAIL:
    case LOGOUT:
    case LOGIN_FAIL:
    case AUTH_ERROR:
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        admin: false,
      };
    default:
      return state;
  }
}
