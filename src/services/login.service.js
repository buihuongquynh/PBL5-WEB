import axiosClient from './config.services';

class UserService {
  static login(obj) {
    const url = `/login`;
    return axiosClient.post(url, { ...obj });
  }
  static signup(obj) {
    const url = `/register`;
    return axiosClient.post(url, { ...obj });
  }
  static logout(obj) {
    const url = `/logout`;
    return axiosClient.post(url, { ...obj });
  }
}
export default UserService;
