import {
  SUB_CATEGORIES_SUCCESS,
  SUB_CATEGORIES_FAILURE,
  // CATEGORY_SUB_CATEGORIES_SUCCESS,
  // CATEGORY_SUB_CATEGORIES_FAILURE,
} from "../actions/subCategoriesActions";

const initialState = {
  subCategories: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SUB_CATEGORIES_SUCCESS:
      // case CATEGORY_SUB_CATEGORIES_SUCCESS:
      return {
        ...state,
        ...payload,
        subCategories: payload.subCategories,
      };

    case SUB_CATEGORIES_FAILURE:
      // case CATEGORY_SUB_CATEGORIES_FAILURE:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
}
