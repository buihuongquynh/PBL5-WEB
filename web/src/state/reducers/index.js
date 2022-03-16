import { combineReducers } from "redux";
import man from "./data-man";
import detail from "./detail"
import order from "./order"
import addCart from "./addCart"
import info from "./info"
// Combine reducer
const rootReducer = combineReducers({
  getMan: man,
  getDetail : detail,
  getOrder: order,
  addCart:addCart,
  getInfo: info,
});
export default rootReducer;
