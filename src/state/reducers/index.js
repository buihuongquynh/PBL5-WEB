import { combineReducers } from "redux";
import man from "./data-man";
import detail from "./detail"
import order from "./order"
import addCart from "./addCart"
import loginReducer from './login';
import info from "./info"
// Combine reducer
const rootReducer = combineReducers({
  loginUser : loginReducer,
  getMan: man,
  getDetail : detail,
  getOrder: order,
  addCart:addCart,
  getInfo: info,
});
export default rootReducer;
