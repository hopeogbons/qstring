import React, { Component } from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import LoginContainer from '../containers/LoginFormContainer';
import FooterContainer from '../containers/FooterContainer';

export default class LoginForm extends Component {
  render() {
    return (
      <div>
        <HeaderContainer status="is_logged_out"/>
        <LoginContainer/>
        <FooterContainer/>
      </div>
    );
  }
}
