import { CATEGORIES_SUCCESS, CATEGORIES_FAILURE } from "../actions/categoriesActions";

const initialState = {
  categories: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_SUCCESS:
      return {
        ...state,
        ...payload,
        categories: payload.categories,
      };
      
    case CATEGORIES_FAILURE:
      return {
        ...state,
        error: payload
      };
    default:
      return state;
  }
}
