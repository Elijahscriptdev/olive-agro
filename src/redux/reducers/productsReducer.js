import {
  PRODUCTS_SUCCESS,
  PRODUCTS_FAILURE,
  CAT_PRODUCTS_SUCCESS,
  CAT_PRODUCTS_FAILURE,
  SINGLE_PRODUCTS_SUCCESS,
  SINGLE_PRODUCTS_FAILURE,
} from "../actions/productsActions";

const initialState = {
  products: [],
  loading: true,
  error: []
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case PRODUCTS_SUCCESS:
    case SINGLE_PRODUCTS_SUCCESS:
      return {
        ...state,
        ...payload,
        loading: false,
        products: payload.products,
      };

    case CAT_PRODUCTS_SUCCESS:
      return {
        ...state,
        ...payload,
        loading: false,
      };

    case PRODUCTS_FAILURE:
    case SINGLE_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case CAT_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
}
