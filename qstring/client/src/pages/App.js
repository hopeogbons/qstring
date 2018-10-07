import React, {Component} from 'react';
import AppContainer from '../containers/AppContainer';

export default class App extends Component {
  render() {
    return (
      <div>
        <AppContainer>
          {this.props.children}
        </AppContainer>
      </div>
    );
  }
}