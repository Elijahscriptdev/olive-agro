import axios from "axios";

export const CATEGORY_SUB_CATEGORIES_SUCCESS = "CATEGORY_SUB_CATEGORIES_SUCCESS";
export const CATEGORY_SUB_CATEGORIES_FAILURE = "CATEGORY_SUB_CATEGORIES_FAILURE";


export const catSubCategories = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://www.api.oliveagro.org/api/subCategory/category/${id}`,
    );
    dispatch({
      type: CATEGORY_SUB_CATEGORIES_SUCCESS,
      payload: res.data.catSubCategory,
    });
  } catch (error) {
    dispatch({
      type: CATEGORY_SUB_CATEGORIES_FAILURE,
    });
  }
};
