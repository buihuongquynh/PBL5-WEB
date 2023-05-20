import axiosClient from "./config.services";
import queryString from "query-string";
class UserService {
  static list(data) {
    const url = "users";
    return axiosClient.get(url + "?" + queryString.stringify(data));
  }
  static detail(id) {
    const url = `users/${id}`;
    return axiosClient.get(url);
  }
  static add(data) {
    const url = `users`;
    return axiosClient.post(url, { ...data });
  }
  static delete(id) {
    const url = `users/${id}`;
    return axiosClient.delete(url);
  }
  static edit(data) {
    const url = `users/${data.id}`;
    return axiosClient.put(url, { ...data });
  }
}
export default UserService;
