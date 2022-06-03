import axiosClient from './config.services';
class BrandService {
  static list() {
    const url = 'brand';
    return axiosClient.get(url);
  }
  static detail(id) {
    const url = `brand/${id}`;
    return axiosClient.get(url);
  }
  static add(data) {
    const url = `brand`;
    return axiosClient.post(url, {...data});
  }
  static delete(id) {
    const url = `brand/${id}`;
    return axiosClient.delete(url);
  }
  static edit(id, data) {
    const url = `brand/${id}`;
    return axiosClient.put(url, {...data});
  }
}
export default BrandService;
