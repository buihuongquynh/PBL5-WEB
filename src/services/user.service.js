import axiosClient from './config.services';
import queryString from 'query-string';
class UserService {
  static list(data) {
    const url = 'user';
    return axiosClient.get(url+"?" + queryString.stringify(data));
  }
  static detail(id) {
    const url = `user/${id}`;
    return axiosClient.get(url);
  }
  static add(data) {
    const url = `user`;
    return axiosClient.post(url, {...data});
  }
  static delete(id) {
    const url = `user/${id}`;
    return axiosClient.delete(url);
  }
  static edit(data) {
    const url = `user/${data.id}`;
    return axiosClient.put(url, {...data});
  }
}
export default UserService;
