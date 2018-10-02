import { Component } from 'react';
import React from "react";

export default class Header extends Component {
	render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
        <div className="container">
          <a className="navbar-brand" href="/">Qstring</a>
        </div>
      </nav>
    );
	}
}