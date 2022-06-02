import Actions from "./action.type";

export const userLogin = payload => ({
  type: Actions.USER_LOGIN,
  payload,
});


export const userLoginSuccess = payload => ({
  type: Actions.USER_LOGIN_SUCCESS,
  payload,
});

export const userLogoutPage = () => ({
  type: Actions.USER_LOGOUT,
}); 
export const userSignUp = (payload ) => ({
  type: Actions.USER_SIGNUP,
  payload  
})

