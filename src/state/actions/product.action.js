import Actions from "./action.type";

export const getProductSuccess = (payload) => ({
  type: Actions.GET_PRODUCT_SUCCESS,
  payload,
});
export const getProduct = (payload) => ({
  type: Actions.GET_PRODUCT,
  payload,
});
export const addProduct = (payload) => ({
  type: Actions.ADD_PRODUCT,
  payload,
});
export const deleteProduct = (payload) => ({
  type: Actions.DELETE_PRODUCT,
  payload,
});
export const editProduct = (payload) => ({
  type: Actions.EDIT_PRODUCT,
  payload,
});

