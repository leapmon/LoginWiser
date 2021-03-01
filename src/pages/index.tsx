import React from 'react';

import FormLogin from './FormLogin'
import FormSuccess from './FormSuccess'

import { connect } from "react-redux";
import { login }  from "../../store/action";
import { logout } from "../../store/action";

const Home = (props) => {
  return (
      <>
       {!props.isLogged ? <FormLogin ClickHandler={props.login} /> : <FormSuccess ClickHandler={props.logout} /> }
       {console.log()}
      </>
  )
}

const mapStateToProps = state => {
  return {
    isLogged: state.isLogged
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login : () => dispatch(login()),
    logout : () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
