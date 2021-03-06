import { Actions } from "../actions";
const initialState = {
  token: localStorage.getItem('token'),
};
function login(state = initialState, action) {
  switch (action.type) {
    case Actions.USER_LOGIN_SUCCESS:
      const token = action.payload;  
      localStorage.setItem('token',token);
      return { ...state,token};
    case Actions.USER_LOGOUT_SUCCESS:
      localStorage.removeItem('token');
      localStorage.removeItem('info');
      return {...state, token:null}  
    default:
      return { ...state};
  } 
}
export default login;
  