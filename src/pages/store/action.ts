//import apiaxios from "../api/apiaxios"

  export const login = () => {
    console.log("ENTROU NA LOGIn");
    return (dispatch) => {
        dispatch({ type: "login",  isLogged: true });
    };
  }

  export const logout = () => {
    console.log("ENTROU NA LOGOUT");
    return (dispatch) => {
        dispatch({ type: "logout", isLogged: false });
    };

  }  

export interface PackageData {
    useremail: string
    userpassworl: string
}

export const MinhaFunc = (data:any) => {
  console.log(data[0].id);
  return (dispatch) => {
    dispatch({ type: "login", isLogged: true });
  }
  //;a=res.data[0].id
}
  
export const authUser = () => { 
    console.log("ENTROU NA AUTHUSER");
    return (dispatch) => {
      var a:number = 0;
      var b:string;

      //apiaxios.get('https://60358b2c6496b9001749f0ed.mockapi.io/api/v1/login').then(res => {console.log(res.data);dispatch({ type: actionTypes.USER_LOGIN, isLogged: true });} );

      //console.log(a);
      
      //if(a==17)
      dispatch({ type: "login", isLogged: true });
      //else
        //console.log("OPCAO 2");
        
        //console.log("asdasdasd");
        ///login();
      
    };
    
  }
  