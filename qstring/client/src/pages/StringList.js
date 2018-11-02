import React, { Component } from 'react';
import HeaderContainer from '../containers/HeaderContainer.js';
import StringListContainer from '../containers/StringListContainer.js';
import FooterContainer from '../containers/FooterContainer.js';

export default class Login extends Component {
  render() {
    return (
      <div>
        <HeaderContainer status="is_logged_in"/>
        <SurveyContainer/>
        <FooterContainer/>
      </div>
    );
  }
}
