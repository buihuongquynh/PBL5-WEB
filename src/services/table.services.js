import axiosClient from './config.services';
import axiosClient2 from './config.servicesCart';

class TableService {
  static listMan() {
    const url = 'product';
    return axiosClient.get(url);
  }
  static listInfo() {
    const url = 'InfoCustomer';
    return axiosClient2.get(url);
  }
  static listOrder() {
    const url = 'cart';
    return axiosClient2.get(url);
  }
  static detail(id) {
    const url = `product/${id}`;
    return axiosClient.get(url);
  }
  static addCart(data) {
    const url = `cart`;
    return axiosClient2.post(url, {...data});
  }
  static addInfo(data) {
    const url = `InfoCustomer`;
    return axiosClient2.post(url, {...data});
  }
  static deleteCart(id) {
    const url = `cart/${id}`;
    return axiosClient2.delete(url);
  }
}
export default TableService;
