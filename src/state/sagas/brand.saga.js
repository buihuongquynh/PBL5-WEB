import { delay } from 'lodash';
import { call, put, takeLatest } from 'redux-saga/effects';
import { toastSuccess } from '../../Helper/toastHelper';
import BrandService from '../../services/brand.service';
import { Actions, getBrandSuccess } from '../actions';
function* fetch() {
  try {
    const data = yield call(BrandService.list);
    yield put(getBrandSuccess(data));
  } catch (e) {
    console.log('get brand error')
  }
}
function* Add(action) {
  try {
  yield call(BrandService.add, action.payload);
  const data = yield call(BrandService.list);
  yield put(getBrandSuccess(data));
  yield toastSuccess('thêm mới thành công');
  } catch (e) {
    console.log("thêm mới thất bại")
  }
}
function* Edit(action) {
  try {
  yield call(BrandService.edit, action.payload);
  const data = yield call(BrandService.list);
  yield put(getBrandSuccess(data));
  yield toastSuccess('sửa thành công');
  } catch (e) {
    console.log("sửa thất bại")
  }
}
function* Delete(action) {
  try {
  yield call(BrandService.delete, action.payload);
  const data = yield call(BrandService.list);
  yield put(getBrandSuccess(data));
  yield toastSuccess('xóa thành công');
  } catch (e) {
    console.log("xóa thất bại")
  }
}
export default function* brandSaga() {
  yield takeLatest(Actions.GET_BRAND, fetch);
  yield takeLatest(Actions.ADD_BRAND, Add);
  yield takeLatest(Actions.EDIT_BRAND, Edit);
  yield takeLatest(Actions.DELETE_BRAND, Delete);
}
