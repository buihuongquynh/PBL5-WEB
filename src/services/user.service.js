import axiosClient from './config.services';
class UserService {
  static list() {
    const url = 'user';
    return axiosClient.get(url);
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
  static edit(id, data) {
    const url = `user/${id}`;
    return axiosClient.put(url, {...data});
  }
}
export default UserService;
