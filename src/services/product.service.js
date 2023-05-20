import axiosClient from "./config.services";
import queryString from "query-string";
class ProductService {
  static list(data) {
    const url = "products";
    return axiosClient.get(url + "?" + queryString.stringify(data));
  }
  static detail(id) {
    const url = `products/${id}`;
    return axiosClient.get(url);
  }
  static add(data) {
    const url = `products`;
    return axiosClient.post(url, { ...data });
  }
  static delete(id) {
    const url = `products/${id}`;
    return axiosClient.delete(url);
  }
  static edit(data) {
    const url = `products/${data.id}`;
    return axiosClient.put(url, { ...data });
  }
}
export default ProductService;
