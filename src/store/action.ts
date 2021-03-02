import apiaxios from "../api/apiaxios"

  export interface PackageData {
    useremail: string
    userpassworl: string
  }

  export const login = () => { 
    return (dispatch) => {
      apiaxios.get('https://60358b2c6496b9001749f0ed.mockapi.io/api/v1/login').then(res => {console.log(res.data);dispatch({ type: "login", isLogged: true });} );
    };
    
  }

  export const logout = () => {
    return (dispatch) => {
        dispatch({ type: "logout", isLogged: false });
    };
  }  


