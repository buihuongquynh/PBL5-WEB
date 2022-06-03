import Actions from "./action.type";

export const getOrderSuccess = (payload) => ({
  type: Actions.GET_ORDER_SUCCESS,
  payload,
});
export const getOrder = (payload) => ({
  type: Actions.GET_ORDER,
  payload,
});
export const addOrder = (payload) => ({
  type: Actions.ADD_ORDER,
  payload,
});
export const deleteOrder = (payload) => ({
  type: Actions.DELETE_ORDER,
  payload,
});
export const editOrder = (payload) => ({
  type: Actions.EDIT_ORDER,
  payload,
});

