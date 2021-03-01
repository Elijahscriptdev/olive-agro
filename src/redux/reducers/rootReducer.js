import currencyReducer from "./currencyReducer";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import wishlistReducer from "./wishlistReducer";
import compareReducer from "./compareReducer";
import productsReducer from "./productsReducer";
import categoriesReducer from "./categoriesReducer";
import subCategoriesReducer from "./subCategoriesReducer";
import auth from "./auth"
import { combineReducers } from "redux";
import { createMultilanguageReducer } from "redux-multilanguage";

const rootReducer = combineReducers({
  multilanguage: createMultilanguageReducer({ currentLanguageCode: "en" }),
  currencyData: currencyReducer,
  productData: productReducer,
  cartData: cartReducer,
  wishlistData: wishlistReducer,
  compareData: compareReducer,
  auth,
  productList: productsReducer,
  categoryList: categoriesReducer,
  subCategoryList: subCategoriesReducer
});

export default rootReducer;
