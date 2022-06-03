import axiosClient from './config.services';
class OrderService {
  static list() {
    const url = 'order';
    return axiosClient.get(url);
  }
  static detail(id) {
    const url = `order/${id}`;
    return axiosClient.get(url);
  }
  static add(data) {
    const url = `order`;
    return axiosClient.post(url, {...data});
  }
  static delete(id) {
    const url = `order/${id}`;
    return axiosClient.delete(url);
  }
  static edit(id, data) {
    const url = `order/${id}`;
    return axiosClient.put(url, {...data});
  }
}
export default OrderService;
