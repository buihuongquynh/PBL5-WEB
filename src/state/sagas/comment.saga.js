import { delay } from 'lodash';
import { call, put, takeLatest } from 'redux-saga/effects';
import { toastSuccess } from '../../Helper/toastHelper';
import CommentService from '../../services/comment.service';
import { Actions, getCommentSuccess } from '../actions';
var info = localStorage.getItem('info')
function* fetch(action) {
  try {
    const data = yield call(CommentService.list, action.payload);
    yield put(getCommentSuccess(data));
  } catch (e) {
    console.log('get cmt error')
  }
}
function* Add(action) {
  try {
  yield call(CommentService.add, action.payload);
  const data = yield call(CommentService.list,{product_id: action.payload.product_id });
  yield put(getCommentSuccess(data));
  yield toastSuccess('thêm mới thành công');
  } catch (e) {
    console.log("thêm mới thất bại")
  }
}
function* Edit(action) {
  try {
  yield call(CommentService.edit, action.payload);
  const data = yield call(CommentService.list,{product_id: action.payload.product_id });
  yield put(getCommentSuccess(data));
  yield toastSuccess('sửa thành công');
  } catch (e) {
    console.log("sửa thất bại")
  }
}
function* Delete(action) {
  try {
  yield call(CommentService.delete, action.payload.id);
  yield toastSuccess('xóa thành công');
  const data = yield call(CommentService.list,{product_id: action.payload.product_id });
  yield put(getCommentSuccess(data));
  } catch (e) {
    console.log("xóa thất bại")
  }
}
export default function* commentSaga() {
  yield takeLatest(Actions.GET_COMMENT, fetch);
  yield takeLatest(Actions.ADD_COMMENT, Add);
  yield takeLatest(Actions.EDIT_COMMENT, Edit);
  yield takeLatest(Actions.DELETE_COMMENT, Delete);
}
