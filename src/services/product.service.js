import axiosClient from './config.services';
import queryString from 'query-string';
class ProductService {
  static list(data) {
    const url = 'product';
    return axiosClient.get(url+"?" + queryString.stringify(data));
  }
  static detail(id) {
    const url = `product/${id}`;
    return axiosClient.get(url);
  }
  static add(data) {
    const url = `product`;
    return axiosClient.post(url, {...data});
  }
  static delete(id) {
    const url = `product/${id}`;
    return axiosClient.delete(url);
  }
  static edit(id, data) {
    const url = `product/${id}`;
    return axiosClient.put(url, {...data});
  }
}
export default ProductService;
