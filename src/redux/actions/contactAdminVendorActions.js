import axios from "axios";
import { setAlert } from "./alert";

export const CONTACT_ADMIN_SUCCESS = "CONTACT_ADMIN_SUCCESS";
export const CONTACT_ADMIN_FAIL = "CONTACT_ADMIN_FAIL";

export const CONTACT_VENDOR_SUCCESS = "CONTACT_VENDOR_SUCCESS";
export const CONTACT_VENDOR_FAIL = "CONTACT_VENDOR_FAIL";

// CONTACT SELLER
export const contactVendor = ({ name, seller_email, message }) => async (
  dispatch
) => {
  const token = localStorage.getItem("token");

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const body = JSON.stringify({
    name,
    seller_email,
    message,
  });

  try {
    console.log("body", body)
    const res = await axios.post(
      "https://www.api.oliveagro.org/api/users/create/messsage",
      body,
      config
    );
    dispatch({
      type: CONTACT_VENDOR_SUCCESS,
      payload: res.data,
    });
    // dispatch(setAlert(res.data.message, "success"));
    console.log(res)
  } catch (error) {
    // if (error.response.data.message) {
    //   dispatch(setAlert(error.response.data.message, "danger"));
    // }
    console.log(error.response.data.message)
    dispatch({
      type: CONTACT_VENDOR_FAIL,
    });
  }
};
