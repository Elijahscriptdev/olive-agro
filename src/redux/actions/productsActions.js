import axios from "axios";

export const PRODUCTS_SUCCESS = "PRODUCTS_SUCCESS";
export const PRODUCTS_FAILURE = "PRODUCTS_FAILURE";

export const listProducts = () => async (dispatch) => {
  const token = localStorage.getItem("token");

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const res = await axios.get(
      "https://www.api.oliveagro.org/api/product/list/all",
      config
    );
    dispatch({
      type: PRODUCTS_SUCCESS,
      payload: res.data,
    });
    console.log(res.data);
  } catch (error) {
    dispatch({
      type: PRODUCTS_FAILURE,
    });
    console.log(error)
  }
};
