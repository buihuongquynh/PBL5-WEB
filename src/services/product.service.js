import axiosClient from './config.services';
class ProductService {
  static list() {
    const url = 'product';
    return axiosClient.get(url);
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
