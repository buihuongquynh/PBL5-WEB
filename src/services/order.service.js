import axiosClient from "./config.services";
import queryString from "query-string";
class OrderService {
  static list(data) {
    const url = "orders";
    return axiosClient.get(url + "?" + queryString.stringify(data));
  }
  static detail(id) {
    const url = `orders/${id}`;
    return axiosClient.get(url);
  }
  static add(data) {
    const url = `orders`;
    return axiosClient.post(url, { ...data });
  }
  static delete(id) {
    const url = `orders/${id}`;
    return axiosClient.delete(url);
  }
  static edit(id, data) {
    const url = `orders/${id}`;
    return axiosClient.put(url, { ...data });
  }
}
export default OrderService;
