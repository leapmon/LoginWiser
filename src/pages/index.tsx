import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Head from 'next/head'


import Section from '../../StyledComponents/Page1Section';
import ColumnLeft from '../../StyledComponents/Page2ColumnLeft';
import ColumnRight from '../../StyledComponents/Page3ColumnRight';
import StyledForm from '../../StyledComponents/Page4StyledForm';
import Welcome from '../../StyledComponents/Page5Welcome';
import Message from '../../StyledComponents/Page6Message';
import LabelEmail from '../../StyledComponents/Page7LabelEmail';
import InputUserEmail from '../../StyledComponents/Page8InputUserEmail';
import ErrorMessageEmail from '../../StyledComponents/Page9ErrorMessageEmail';
import LabelPassword from '../../StyledComponents/Page10LabelPassword';
import InputUserPassword from '../../StyledComponents/Page11InputUserPassword';
import ErrorMessagePassword from '../../StyledComponents/Page12ErrorMessagePassword';
import Button from '../../StyledComponents/Page13Button';
import LabelButton from '../../StyledComponents/Page14LabelButton';
import RegularLink from '../../StyledComponents/Page15Link';
import CentralContent from '../../StyledComponents/Page16CentralContent';
import MessageForgot from '../../StyledComponents/Page17MessageForgot';
import Link from 'next/link'

import FormLogin from './FormLogin'
import FormSuccess from './FormSuccess'

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "../../store/reducer";

const store = createStore(reducer, applyMiddleware(thunk));

import { connect } from "react-redux";
import { login }  from "../../store/action";
import { logout } from "../../store/action";
import {authUser} from "../../store/action";

const Home = (props) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm()
  {
      setIsSubmitted(true);
  }

  function logOut()
  {
      setIsSubmitted(false);
  }


  return (
      <>
       {!isSubmitted ? <FormLogin ClickHandler={submitForm} /> : <FormSuccess ClickHandler={logOut} /> }
       {console.log(isSubmitted)}
      </>
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

//export default Home

export default connect(mapStateToProps, mapDispatchToProps)(Home);
