import React, { Component } from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import QstringListContainer from '../containers/QstringListContainer';
import FooterContainer from '../containers/FooterContainer';

export default class Login extends Component {
  render() {
    return (
      <div>
        <HeaderContainer status="is_logged_in"/>
        <QstringListContainer/>
        <FooterContainer/>
      </div>
    );
  }
}
