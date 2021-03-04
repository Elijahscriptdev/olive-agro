import axios from "axios";

export const PRODUCTS_SUCCESS = "PRODUCTS_SUCCESS";
export const PRODUCTS_FAILURE = "PRODUCTS_FAILURE";
export const SINGLE_PRODUCTS_SUCCESS = "SINGLE_PRODUCTS_SUCCESS";
export const SINGLE_PRODUCTS_FAILURE = "SINGLE_PRODUCTS_FAILURE";
export const CAT_PRODUCTS_SUCCESS = "CAT_PRODUCTS_SUCCESS";
export const CAT_PRODUCTS_FAILURE = "CAT_PRODUCTS_FAILURE";

export const listProducts = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://www.api.oliveagro.org/api/product/list/all"
    );
    dispatch({
      type: PRODUCTS_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCTS_FAILURE,
    });
    console.log(error);
  }
};

export const detailsProducts = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://www.api.oliveagro.org/api/product/" + id
    );
    dispatch({
      type: SINGLE_PRODUCTS_SUCCESS,
      payload: res.data,
    });
    console.log("product", res.data)
  } catch (error) {
    dispatch({
      type: SINGLE_PRODUCTS_FAILURE,
    });
    console.log(error);
  }
};

// export const detailsProductsCategory = (id) => (dispatch) => {
//     const res = await axios.get(
//       `https://www.api.oliveagro.org/api/product/${id}`
//     );
//     dispatch({
//       type: CAT_PRODUCTS_SUCCESS,
//       payload: id
//     });
//     dispatch({
//       type: CAT_PRODUCTS_SUCCESS,
//     });
// };
