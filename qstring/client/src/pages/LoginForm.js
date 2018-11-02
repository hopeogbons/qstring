import React, { Component } from 'react';
import HeaderContainer from '../containers/HeaderContainer.js';
import LoginContainer from '../containers/LoginFormContainer.js';
import FooterContainer from '../containers/FooterContainer.js';

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
