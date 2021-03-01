import * as actionTypes from "./ActionTypes"

const initialState = {
    isLogged: false
  };
  
  const reducer = function(state = initialState, action) {
    console.log("ENTREI NO REDUTOR!!!");
    if (action.type === actionTypes.USER_LOGIN) {
      return { ...state, isLogged: action.isLogged};
    } else if (action.type === actionTypes.USER_LOGOUT) {
      return { ...state, isLogged: action.isLogged};
    } 
    else {
      return state;
    }
  };
  
  export default reducer;