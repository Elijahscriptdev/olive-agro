import { PRODUCTS_SUCCESS, PRODUCTS_FAILURE } from "../actions/productsActions";

const initialState = {
  products: [],
  loading: true
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case PRODUCTS_SUCCESS:
      return {
        ...state,
        ...payload,
        loading: false,
        products: payload.products,
      };
      
    case PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload.message
      };
    default:
      return state;
  }
}
