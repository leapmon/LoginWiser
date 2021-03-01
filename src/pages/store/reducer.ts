const initialState = {
    isLogged: false
  };
  
  const reducer = function(state = initialState, action) {
    console.log("ENTREI NO REDUTOR!!!");
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