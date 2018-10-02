import React, { Component } from 'react';
import HeaderContainer from '../containers/HeaderContainer.js';
import LoginContainer from '../containers/LoginContainer.js';
import FooterContainer from '../containers/FooterContainer.js';

export default class Login extends Component {
  render() {
    return (
      <div>
        <HeaderContainer status="logged_out"/>
        <LoginContainer/>
        <FooterContainer/>
      </div>
    );
  }
}
