import Actions from "./action.type";

export const getManSuccess = (payload) => ({
  type: Actions.GET_DATA_MAN_SUCCESS,
  payload,
});

export const getMan = (payload) => ({
  type: Actions.GET_DATA_MAN,
  payload,
});

export const getDetail = (payload) => ({
  type: Actions.GET_DELTAI,
  payload: payload,
});
export const getDetailSuccess = (payload) => ({
  type: Actions.GET_DELTAI_SUCCESS,
  payload,
});
export const getOrder = (payload) => ({
  type: Actions.GET_ORDER,
  payload: payload,
});
export const getOrderSuccess = (payload) => ({
  type: Actions.GET_ORDER_SUCCESS,
  payload,
});
export const addCart = (payload) => ({
  type: Actions.ADD_CART,
  payload,
});
export const addCartSuccess = (payload) => ({
  type: Actions.ADD_CART_SUCCESS,
  payload,
});
export const deleteCart = (payload) => ({
  type: Actions.DELETE_CART,
  payload,
});

export const getInfo = (payload) => ({
  type: Actions.GET_INFO,
  payload: payload,
});
export const getInfoSuccess = (payload) => ({
  type: Actions.GET_INFO_SUCCESS,
  payload,
});
export const AddInfo = (payload) => ({
  type: Actions.ADD_INFO,
  payload,
});
export const addInfoSuccess = (payload) => ({
  type: Actions.ADD_INFO_SUCCESS,
  payload,
});