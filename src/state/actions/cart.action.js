import Actions from "./action.type";

export const getCartSuccess = (payload) => ({
  type: Actions.GET_CART_SUCCESS,
  payload,
});
export const getCart = (payload) => ({
  type: Actions.GET_CART,
  payload,
});
export const addCart = (payload) => ({
  type: Actions.ADD_CART,
  payload,
});
export const deleteCart = (payload) => ({
  type: Actions.DELETE_CART,
  payload,
});
export const editCart = (payload) => ({
  type: Actions.EDIT_CART,
  payload,
});

