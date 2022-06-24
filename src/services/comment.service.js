import axiosClient from './config.services';
import queryString from 'query-string';
class CommentService {
  static list(data) {
    const url = 'comment';
    return axiosClient.get(url+"?" + queryString.stringify(data));
  }
  static add(data) {
    const url = `comment`;
    return axiosClient.post(url, {...data});
  }
  static delete(id) {
    const url = `comment/${id}`;
    return axiosClient.delete(url);
  }
  static edit(data) {
    const url = `comment/${data.id}`;
    return axiosClient.put(url, {...data});
  }
}
export default CommentService;
