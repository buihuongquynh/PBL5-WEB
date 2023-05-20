import axiosClient from "./config.services";
class BrandService {
  static list() {
    const url = "brands";
    return axiosClient.get(url);
  }
  static detail(id) {
    const url = `brands/${id}`;
    return axiosClient.get(url);
  }
  static add(data) {
    const url = `brands`;
    return axiosClient.post(url, { ...data });
  }
  static delete(id) {
    const url = `brands/${id}`;
    return axiosClient.delete(url);
  }
  static edit(data) {
    const url = `brands/${data.id}`;
    return axiosClient.put(url, { ...data });
  }
}
export default BrandService;
