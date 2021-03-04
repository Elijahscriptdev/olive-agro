import currencyReducer from "./currencyReducer";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import wishlistReducer from "./wishlistReducer";
import compareReducer from "./compareReducer";
import productsReducer from "./productsReducer";
import singleProductsReducer from "./singleProductsReducer";
import categoriesReducer from "./categoriesReducer";
import subCategoriesReducer from "./subCategoriesReducer";
import auth from "./auth";
import { combineReducers } from "redux";
import { createMultilanguageReducer } from "redux-multilanguage";
import productsReducerCat from "./productsReducerCat";

const rootReducer = combineReducers({
  multilanguage: createMultilanguageReducer({ currentLanguageCode: "en" }),
  currencyData: currencyReducer,
  productData: productReducer,
  cartData: cartReducer,
  wishlistData: wishlistReducer,
  compareData: compareReducer,
  auth,
  productList: productsReducer,
  singleProductList: singleProductsReducer,
  categoryList: categoriesReducer,
  subCategoryList: subCategoriesReducer,
  productListCat: productsReducerCat,
});

export default rootReducer;
