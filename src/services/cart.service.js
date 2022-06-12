import axiosClient from './config.services';
import queryString from 'query-string';
class CartService {
  static list(data) {
    const url = 'cart';
    return axiosClient.get(url+"?" + queryString.stringify(data));
  }
  static detail(id) {
    const url = `cart/${id}`;
    return axiosClient.get(url);
  }
  static add(data) {
    const url = `cart`;
    return axiosClient.post(url, {...data});
  }
  static delete(id) {
    const url = `cart/${id}`;
    return axiosClient.delete(url);
  }
  static edit(id, data) {
    const url = `cart/${id}`;
    return axiosClient.put(url, {...data});
  }
}
export default CartService;
