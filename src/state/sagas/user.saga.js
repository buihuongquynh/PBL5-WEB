import { delay } from 'lodash';
import { call, put, takeLatest } from 'redux-saga/effects';
import { toastSuccess } from '../../Helper/toastHelper';
import UserService from '../../services/user.service';
import { Actions, getUserSuccess } from '../actions';
function* fetch(action) {
  try {
    const data = yield call(UserService.list, action.payload);
    yield put(getUserSuccess(data));
  } catch (e) {
    console.log('get user error')
  }
}
function* Add(action) {
  try {
  yield call(UserService.add, action.payload);
  const data = yield call(UserService.list);
  yield put(getUserSuccess(data));
  yield toastSuccess('thêm mới thành công');
  } catch (e) {
    console.log("thêm mới thất bại")
  }
}
function* Edit(action) {
  try {
  yield call(UserService.edit, action.payload);
  const data = yield call(UserService.list);
  yield put(getUserSuccess(data));
  yield toastSuccess('sửa thành công');
  } catch (e) {
    console.log("sửa thất bại")
  }
}
function* Delete(action) {
  try {
  yield call(UserService.delete, action.payload);
  const data = yield call(UserService.list);
  yield put(getUserSuccess(data));
  yield toastSuccess('xóa thành công');
  } catch (e) {
    console.log("xóa thất bại")
  }
}
export default function* userSaga() {
  yield takeLatest(Actions.GET_USER, fetch);
  yield takeLatest(Actions.ADD_USER, Add);
  yield takeLatest(Actions.EDIT_USER, Edit);
  yield takeLatest(Actions.DELETE_USER, Delete);
}
