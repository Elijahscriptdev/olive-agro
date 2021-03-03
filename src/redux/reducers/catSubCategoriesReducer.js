import {
  CATEGORY_SUB_CATEGORIES_SUCCESS,
  CATEGORY_SUB_CATEGORIES_FAILURE,
} from "../actions/catSubCategoriesActions";

const initialState = {
  subCategories: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
      case CATEGORY_SUB_CATEGORIES_SUCCESS:
      return {
        ...state,
        ...payload,
        subCategories: payload.data,
      };

      case CATEGORY_SUB_CATEGORIES_FAILURE:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
}
