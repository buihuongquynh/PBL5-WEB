import { combineReducers } from "redux";
import man from "./data-man";
import detail from "./detail"
// import order from "./order"
import addCart from "./addCart"
import loginReducer from './login';
import info from "./info";
import brand from "./brand"
import order from "./order"
import product from "./product";
import user from "./user"
import cart from "./cart"
// Combine reducer
const rootReducer = combineReducers({
  loginUser : loginReducer,
  getMan: man,
  getDetail : detail,
  // getOrder: order,
  addCart:addCart,
  getInfo: info,
  brand: brand,
  order: order,
  cart: cart,
  user: user,
  product: product

});
export default rootReducer;
