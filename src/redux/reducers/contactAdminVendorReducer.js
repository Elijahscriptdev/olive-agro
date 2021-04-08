import {
  CONTACT_VENDOR_SUCCESS,
  CONTACT_VENDOR_FAIL,
} from "../actions/contactAdminVendorActions";

const initialState = {
  message: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CONTACT_VENDOR_SUCCESS:
      return {
        ...state,
        message: payload,
      };
    case CONTACT_VENDOR_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
}
