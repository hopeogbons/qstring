import React, { Component } from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import QstringFormContainer from '../containers/QstringFormContainer';
import FooterContainer from '../containers/FooterContainer';

export default class Login extends Component {
  render() {
    return (
      <div>
        <HeaderContainer status="is_logged_in"/>
        <QstringFormContainer/>
        <FooterContainer/>
      </div>
    );
  }
}
