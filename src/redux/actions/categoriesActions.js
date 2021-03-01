import axios from "axios";

export const CATEGORIES_SUCCESS = "CATEGORIES_SUCCESS";
export const CATEGORIES_FAILURE = "CATEGORIES_FAILURE";

export const listCategories = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://www.api.oliveagro.org/api/category/list/all"
    );
    dispatch({
      type: CATEGORIES_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: CATEGORIES_FAILURE,
    });
    console.log(error);
  }
};
