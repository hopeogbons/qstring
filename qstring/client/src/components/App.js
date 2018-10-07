import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

export default class App extends Component {
  componentWillMount() {
    this.props.loadUserFromToken();
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={ Dashboard } />
          <Route path="/login" component={ Login } port={this.props.port} />
        </Switch>
      </div>
    )
  }
}