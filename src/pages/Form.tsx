import React, {useState} from 'react'
import FormLogin from './FormLogin'
import FormSucess from './FormSuccess'

import { connect } from "react-redux";
import { login }  from "../../store/action";
import { logout } from "../../store/action";
import {authUser} from "../../store/action";

const Form = (props) => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    return (
        <div>
          { !props.isLogged && ( <FormLogin ClickHandler={ props.authUser }  /> )}
          { props.isLogged && ( <FormSucess ClickHandler={ props.logout} /> )}
        </div>
    )
}

const mapStateToProps = state => {
  return {
    isLogged: state.isLogged
  };
};

const mapDispatchToProps = dispatch => {
  const a = ({useremail: "Leandro", userpassworl: "sapo"});
  
  return {
    authUser : () => dispatch(authUser()),
    login : () => dispatch(login()),
    logout : () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);

//export default Form
//{ !isSubmitted && ( <FormLogin ClickHandler={ () => setIsSubmitted(true)}  /> )}