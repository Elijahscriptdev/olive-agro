import axios from "axios";

export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";

const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

// export const fetchProductsSuccess = () => async (dispatch) => {
//   const token = localStorage.getItem("token");

//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };

//   try {
//     const res = await axios.get(
//       "https://www.api.oliveagro.org/api/product/list/all",
//       config
//     );
//     dispatch({
//       type: FETCH_PRODUCTS_SUCCESS,
//       payload: res.data,
//     });
//     console.log(res.data);
//   } catch (error) {
//     dispatch({
//       type: FETCH_PRODUCTS_FAILURE,
//     });
//   }
// };

// fetch products
export const fetchProducts = (products) => {
  return (dispatch) => {
    dispatch(fetchProductsSuccess(products));
  };
};
