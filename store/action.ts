import apiaxios from "../api/apiaxios"

  export interface PackageData {
    useremail: string
    userpassworl: string
  }

  export const login = () => { 
    console.log("ENTROU NA LOGIN");
    apiaxios.get('https://60358b2c6496b9001749f0ed.mockapi.io/api/v1/login').then(res => {console.log(res.data)} );

    return (dispatch) => {
      console.log("ENTROU NA LOGIN 2");
      apiaxios.get('https://60358b2c6496b9001749f0ed.mockapi.io/api/v1/login').then(res => {console.log(res.data);dispatch({ type: "login", isLogged: true });} );
      //dispatch({ type: "login", isLogged: true });
    };
    
  }

  export const logout = () => {
    console.log("ENTROU NA LOGOUT");
    return (dispatch) => {
        dispatch({ type: "logout", isLogged: false });
    };
  }  


