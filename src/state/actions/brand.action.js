import Actions from "./action.type";

export const getBrandSuccess = (payload) => ({
  type: Actions.GET_BRAND_SUCCESS,
  payload,
});
export const getBrand = (payload) => ({
  type: Actions.GET_BRAND,
  payload,
});
export const addBrand = (payload) => ({
  type: Actions.ADD_BRAND,
  payload,
});
export const deleteBrand = (payload) => ({
  type: Actions.DELETE_BRAND,
  payload,
});
export const editBrand = (payload) => ({
  type: Actions.EDIT_BRAND,
  payload,
});

