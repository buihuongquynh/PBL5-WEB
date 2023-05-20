import axiosClient from "./config.services";
import queryString from "query-string";
class CartService {
  static list(data) {
    const url = "carts";
    return axiosClient.get(url + "?" + queryString.stringify(data));
  }
  static detail(id) {
    const url = `carts/${id}`;
    return axiosClient.get(url);
  }
  static add(data) {
    const url = `carts`;
    return axiosClient.post(url, { ...data });
  }
  static delete(id) {
    const url = `carts/${id}`;
    return axiosClient.delete(url);
  }
  static edit(id, data) {
    const url = `carts/${id}`;
    return axiosClient.put(url, { ...data });
  }
}
export default CartService;
