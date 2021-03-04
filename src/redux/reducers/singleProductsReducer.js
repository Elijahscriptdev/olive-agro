import {
  SINGLE_PRODUCTS_SUCCESS,
  SINGLE_PRODUCTS_FAILURE,
} from "../actions/productsActions";

const initialState = {
  loading: true,
  product: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SINGLE_PRODUCTS_SUCCESS:
      return {
        ...state,
        ...payload,
        loading: false,
        product: payload.product,
      };

    case SINGLE_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
}
