import { PRODUCTS_SUCCESS, PRODUCTS_FAILURE } from "../actions/productsActions";

const initialState = {
  products: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case PRODUCTS_SUCCESS:
      return {
        ...state,
        ...payload,
        products: payload,
      };
      
    case PRODUCTS_FAILURE:
      return {
        ...state,
        error: payload
      };
    default:
      return state;
  }
}
