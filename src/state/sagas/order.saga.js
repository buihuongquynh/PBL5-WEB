import { delay } from 'lodash';
import { call, put, takeLatest } from 'redux-saga/effects';
import { toastSuccess } from '../../Helper/toastHelper';
import OrderService from '../../services/order.service';
import { Actions, getOrderSuccess } from '../actions';
function* fetch() {
  try {
    const data = yield call(OrderService.list);
    yield put(getOrderSuccess(data));
  } catch (e) {
    console.log('get order error')
  }
}
function* Add(action) {
  try {
  yield call(OrderService.add, action.payload);
  const data = yield call(OrderService.list);
  yield put(getOrderSuccess(data));
  yield toastSuccess('thêm mới thành công');
  } catch (e) {
    console.log("thêm mới thất bại")
  }
}
function* Edit(action) {
  try {
  yield call(OrderService.edit, action.payload);
  const data = yield call(OrderService.list);
  yield put(getOrderSuccess(data));
  yield toastSuccess('sửa thành công');
  } catch (e) {
    console.log("sửa thất bại")
  }
}
function* Delete(action) {
  try {
  yield call(OrderService.delete, action.payload);
  const data = yield call(OrderService.list);
  yield put(getOrderSuccess(data));
  yield toastSuccess('xóa thành công');
  } catch (e) {
    console.log("xóa thất bại")
  }
}
export default function* orderSaga() {
  yield takeLatest(Actions.GET_ORDER, fetch);
  yield takeLatest(Actions.ADD_ORDER, Add);
  yield takeLatest(Actions.EDIT_ORDER, Edit);
  yield takeLatest(Actions.DELETE_ORDER, Delete);
}
