import { Actions } from "../actions";
const initialState = {
  data: null
};

const detail = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_INFO_SUCCESS: {
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

export default detail;
