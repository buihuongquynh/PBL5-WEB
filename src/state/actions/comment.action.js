import Actions from "./action.type";

export const getCommentSuccess = (payload) => ({
  type: Actions.GET_COMMENT_SUCCESS,
  payload,
});
export const getComment = (payload) => ({
  type: Actions.GET_COMMENT,
  payload,
});
export const addComment = (payload) => ({
  type: Actions.ADD_COMMENT,
  payload,
});
export const deleteComment = (payload) => ({
  type: Actions.DELETE_COMMENT,
  payload,
});
export const editComment = (payload) => ({
  type: Actions.EDIT_COMMENT,
  payload,
});

