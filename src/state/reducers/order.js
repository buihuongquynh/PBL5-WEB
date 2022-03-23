
import { Actions } from '../actions';
const initialState = {
  data: null
};
const order = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_ORDER_SUCCESS: {
      const { payload: data } = action;
      return {
        ...state,
        data
      };
    }
    case Actions.DELETE_CART:{
      
    }
    default:
      return state;
  }
};

export default order;
