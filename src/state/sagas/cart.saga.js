import { delay } from 'lodash';
import { call, put, takeLatest } from 'redux-saga/effects';
import { toastSuccess } from '../../Helper/toastHelper';
import CartService from '../../services/cart.service';
import { Actions, getCartSuccess } from '../actions';
function* fetch(action) {
  try {
    const data = yield call(CartService.list, action.payload);
    yield put(getCartSuccess(data));
  } catch (e) {
    console.log('get cart error')
  }
}
function* Add(action) {
  try {
  yield call(CartService.add, action.payload);
  const data = yield call(CartService.list);
  yield put(getCartSuccess(data));
  yield toastSuccess('thêm mới thành công');
  } catch (e) {
    console.log("thêm mới thất bại")
  }
}
function* Edit(action) {
  try {
  yield call(CartService.edit, action.payload);
  const data = yield call(CartService.list);
  yield put(getCartSuccess(data));
  yield toastSuccess('sửa thành công');
  } catch (e) {
    console.log("sửa thất bại")
  }
}
function* Delete(action) {
  try {
  yield call(CartService.delete, action.payload);
  const data = yield call(CartService.list);
  yield put(getCartSuccess(data));
  yield toastSuccess('xóa thành công');
  } catch (e) {
    console.log("xóa thất bại")
  }
}
export default function* cartSaga() {
  yield takeLatest(Actions.GET_CART, fetch);
  yield takeLatest(Actions.ADD_CART, Add);
  yield takeLatest(Actions.EDIT_CART, Edit);
  yield takeLatest(Actions.DELETE_CART, Delete);
}
