import React, { Component } from 'react';
import HeaderContainer from '../containers/HeaderContainer.js';
import StringFormContainer from '../containers/StringFormContainer.js';
import FooterContainer from '../containers/FooterContainer.js';

export default class Login extends Component {
  render() {
    return (
      <div>
        <HeaderContainer status="is_logged_in"/>
        <StringFormContainer/>
        <FooterContainer/>
      </div>
    );
  }
}
