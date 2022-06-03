import axiosClient from './config.services';
class CartService {
  static list() {
    const url = 'cart';
    return axiosClient.get(url);
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
