
import { Actions } from '../actions';
const initialState = {
  data: null
};
const currency = (state = initialState, action) => {
    console.log(initialState)
    switch (action.type) {
    case Actions.GET_DATA_MAN_SUCCESS: {
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

export default currency;
