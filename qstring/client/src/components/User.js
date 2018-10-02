import React, { Component } from 'react';
import axios from 'axios';

export default class User extends Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get('http://aui.qstring.local:8000/users/')
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul>
        { this.state.persons.map((person, i) => <li key={i}>{person.username}</li>)}
      </ul>
    )
  }
}