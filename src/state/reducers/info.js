import { Actions } from "../actions";
const initialState = {
  data: localStorage.getItem("info"),
};

const detail = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_INFO_SUCCESS: {
      const data = action.payload;
      localStorage.setItem("info",JSON.stringify(data));
      return { ...state, data };
    }
    default:
      return state;
  }
};

export default detail;
