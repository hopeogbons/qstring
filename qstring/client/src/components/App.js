import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginForm from '../pages/LoginForm';
import QstringList from '../pages/QstringList';
import QstringForm from '../pages/QstringForm';

export default class App extends Component {
  componentWillMount() {
    this.props.loadUserFromToken();
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={ QstringList } />
          <Route path="/create" component={ QstringForm } />
          <Route path="/login" component={ LoginForm } />
        </Switch>
      </div>
    )
  }
}