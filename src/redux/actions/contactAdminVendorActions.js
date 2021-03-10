import axios from "axios";

export const CONTACT_ADMIN_SUCCESS = "CONTACT_ADMIN_SUCCESS";
export const CONTACT_ADMIN_FAIL = "CONTACT_ADMIN_FAIL";

export const CONTACT_VENDOR_SUCCESS = "CONTACT_VENDOR_SUCCESS";
export const CONTACT_VENDOR_FAIL = "CONTACT_VENDOR_FAIL";

// CONTACT SELLER
// export const contactVendor = ({ name, buyer_email, message }) => async (
//   dispatch
// ) => {
//   const config = {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };

//   const body = JSON.stringify({
//     name,
//     buyer_email,
//     message,
//   });

//   try {
//     const res = await axios.post(
//       "https://www.api.oliveagro.org/api/users/create/messsage",
//       body,
//       config
//     );
//     dispatch({
//       type: CONTACT_VENDOR_SUCCESS,
//       payload: res.data,
//     });
//   } catch (error) {
//     console.log(error.response);
//     dispatch({
//       type: CONTACT_VENDOR_FAIL,
//     });
//   }
// };
