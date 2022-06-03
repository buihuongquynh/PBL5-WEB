import { delay } from 'lodash';
import { call, put, takeLatest } from 'redux-saga/effects';
import { toastSuccess } from '../../Helper/toastHelper';
import ProductService from '../../services/product.service';
import { Actions, getProductSuccess } from '../actions';
function* fetch() {
  try {
    const data = yield call(ProductService.list);
    yield put(getProductSuccess(data));
  } catch (e) {
    console.log('get product error')
  }
}
function* Add(action) {
  try {
  yield call(ProductService.add, action.payload);
  const data = yield call(ProductService.list);
  yield put(getProductSuccess(data));
  yield toastSuccess('thêm mới thành công');
  } catch (e) {
    console.log("thêm mới thất bại")
  }
}
function* Edit(action) {
  try {
  yield call(ProductService.edit, action.payload);
  const data = yield call(ProductService.list);
  yield put(getProductSuccess(data));
  yield toastSuccess('sửa thành công');
  } catch (e) {
    console.log("sửa thất bại")
  }
}
function* Delete(action) {
  try {
  yield call(ProductService.delete, action.payload);
  const data = yield call(ProductService.list);
  yield put(getProductSuccess(data));
  yield toastSuccess('xóa thành công');
  } catch (e) {
    console.log("xóa thất bại")
  }
}
export default function* productSaga() {
  yield takeLatest(Actions.GET_PRODUCT, fetch);
  yield takeLatest(Actions.ADD_PRODUCT, Add);
  yield takeLatest(Actions.EDIT_PRODUCT, Edit);
  yield takeLatest(Actions.DELETE_PRODUCT, Delete);
}
