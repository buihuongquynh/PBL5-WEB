import Actions from "./action.type";

export const getUserSuccess = (payload) => ({
  type: Actions.GET_USER_SUCCESS,
  payload,
});
export const getUser = (payload) => ({
  type: Actions.GET_USER,
  payload,
});
export const addUser = (payload) => ({
  type: Actions.ADD_USER,
  payload,
});
export const deleteUser = (payload) => ({
  type: Actions.DELETE_USER,
  payload,
});
export const editUser = (payload) => ({
  type: Actions.EDIT_USER,
  payload,
});

