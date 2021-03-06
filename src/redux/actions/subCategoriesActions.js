import axios from "axios";

export const SUB_CATEGORIES_SUCCESS = "SUB_CATEGORIES_SUCCESS";
export const SUB_CATEGORIES_FAILURE = "SUB_CATEGORIES_FAILURE";
// export const CATEGORY_SUB_CATEGORIES_SUCCESS = "CATEGORY_SUB_CATEGORIES_SUCCESS";
// export const CATEGORY_SUB_CATEGORIES_FAILURE = "CATEGORY_SUB_CATEGORIES_FAILURE";

export const listSubCategories = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://www.api.oliveagro.org/api/subCategory/list/all"
    );
    dispatch({
      type: SUB_CATEGORIES_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: SUB_CATEGORIES_FAILURE,
    });
    console.log(error);
  }
};


// export const listCategorySubCategories = (id) => async (dispatch) => {
//   try {
//     const res = await axios.get(
//       `https://www.api.oliveagro.org/api/subCategory/category/${id}`,
//     );
//     dispatch({
//       type: CATEGORY_SUB_CATEGORIES_SUCCESS,
//       payload: res.data,
//     });
//   } catch (error) {
//     dispatch({
//       type: CATEGORY_SUB_CATEGORIES_FAILURE,
//     });
//   }
// };
