import React, { Component } from 'react';
import HeaderContainer from '../containers/HeaderContainer.js';
import SurveyContainer from '../containers/SurveyContainer.js';
import FooterContainer from '../containers/FooterContainer.js';

export default class Login extends Component {
  render() {
    return (
      <div>
        <HeaderContainer status="logged_in"/>
        <SurveyContainer/>
        <FooterContainer/>
      </div>
    );
  }
}