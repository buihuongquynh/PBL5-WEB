import { call, put, takeLatest, all } from "redux-saga/effects";
import {
  Actions,
  getManSuccess,
  getDetailSuccess,
  getOrderSuccess,
  addCartSuccess,
  getInfoSuccess,
  addInfoSuccess
} from "../actions";
import { ToastContainer, toast } from 'react-toastify';

import TableService from "../../services/table.services";
function* fetchMan() {
  try {
    console.log("hihih")
    const list = yield call(TableService.listMan);
    yield put(getManSuccess(list));
  } catch (e) {
    console.log("hihih")
    yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}

function* fetchDetail(action) {
  try {
    const detail = yield call(TableService.detail, action.payload);
    yield put(getDetailSuccess(detail));
  } catch (e) {
    yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}
function* fetchOrder(action) {
  try {
    const order = yield call(TableService.listOrder, action.payload);
    yield put(getOrderSuccess(order));
  } catch (e) {
    yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}
function* addCart(action) {
  try {
    const order = yield call(TableService.addCart, action.payload);
    yield put(addCartSuccess(order));
    const list = yield call(TableService.listOrder, action.payload);
    yield put(getOrderSuccess(list));
    toast.success('success !!!', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } catch (e) {
    yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}
function* deleteCart(action) {
  try {
    toast.success('delete success !!!', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    yield call(TableService.deleteCart, action.payload);
    const list = yield call(TableService.listOrder, action.payload);
    yield put(getOrderSuccess(list));
   
  } catch (e) {
    yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}
function* fetchInfo() {
  try {
    const info = yield call(TableService.listInfo);
    yield put(getInfoSuccess(info));
  } catch (e) {
    yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}
function* addInfo(action) {
  try {
    toast.success('success !!!', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    yield call(TableService.addInfo, action.payload);
    const list = yield call(TableService.listOrder, action.payload);
    yield put(getInfoSuccess(list));
  
  } catch (e) {
    yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}
function* mySaga() {
  yield takeLatest(Actions.GET_DATA_MAN, fetchMan);
  yield takeLatest(Actions.GET_DELTAI, fetchDetail);
  yield takeLatest(Actions.GET_ORDER, fetchOrder);
  yield takeLatest(Actions.ADD_CART, addCart);
  yield takeLatest(Actions.DELETE_CART, deleteCart);
  yield takeLatest(Actions.GET_INFO, fetchInfo);
  yield takeLatest(Actions.ADD_INFO, addInfo);

}

export default function* rootSaga() {
  yield all([mySaga()]);
}
