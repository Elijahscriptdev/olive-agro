import {
  CAT_PRODUCTS_SUCCESS,
  CAT_PRODUCTS_FAILURE,
} from "../actions/productsActions";

const initialState = {
  category_id: [],
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CAT_PRODUCTS_SUCCESS:
      return {
        ...state,
        ...payload,
        loading: false,
      };
    case CAT_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
