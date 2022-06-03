import { delay } from 'lodash';
import { call, put, takeLatest } from 'redux-saga/effects';
import { toastSuccess } from '../../Helper/toastHelper';
// import RecruitmentService from '../../Services/recruitment.service';
// import UpfileService from '../../Services/upfile.service';
import LoginService from '../../services/login.service';
import { Actions, getListUserRec, getProfileUserSuccess, userLoginSuccess } from '../actions';
function* userLogin(action) {
  console.log(action, 'action');
  try {
    const res = yield call(LoginService.login, action.payload);
    const token = yield res.access_token;
    yield put(userLoginSuccess(token));
    // const infoUser = yield call(LoginService.getProfile);
    // yield put(getProfileUserSuccess(infoUser));
    yield toastSuccess('Đăng nhập thành công');
  } catch (error) {
    console.log('Đăng nhập thất bại');
  }
}
function* userRegis(action) {
  // const {userName,password} = action.payload;
  console.log(action.payload,'action.payload;');
  try {
    yield call(LoginService.signup,action.payload);
    yield toastSuccess('Đăng kí thành công');
    // const res = yield call(LoginService.login, action.payload);
    // const token = yield res.access_token;
    // yield put(userLoginSuccess(token));
    // const infoUser = yield call(LoginService.getProfile);
    // yield put(getProfileUserSuccess(infoUser));
    // yield toastSuccess('Đăng nhập thành công');
  } catch (error) {
    console.log('Đăng kí thất bại');
  }
}

export default function* loginSaga() {
  yield takeLatest(Actions.USER_LOGIN, userLogin);
  yield takeLatest(Actions.USER_SIGNUP, userRegis);
}
