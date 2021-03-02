const initialState = {
    isLogged: false
  };
  
  const reducer = function(state = initialState, action) {
    if (action.type === "login") {
      return { ...state, isLogged: action.isLogged};
    } else if (action.type === "logout") {
      return { ...state, isLogged: action.isLogged};
    } 
    else {
      return state;
    }
  };
  
  export default reducer;