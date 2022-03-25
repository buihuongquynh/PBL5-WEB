
import { Actions } from '../actions';
const initialState = {
  data: null
};
const addCart = (state = initialState, action) => {
    switch (action.type) {
    case Actions.ADD_CART_SUCCESS: {
      const { payload: data } = action;
      return {
        ...state,
        data
      };
    }
    default:
      return state;
  }
};

export default addCart;
