import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginForm from '../pages/LoginForm';
import StringList from '../pages/StringList';
import StringForm from '../pages/StringForm';

export default class App extends Component {
  componentWillMount() {
    this.props.loadUserFromToken();
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={ StringList } />
          <Route path="/create" component={ StringForm } />
          <Route path="/login" component={ LoginForm } />
        </Switch>
      </div>
    )
  }
}