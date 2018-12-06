import { Component } from 'react';
import React from "react";

export default class Header extends Component {
	render() {
    const status = this.props.status;
    if (status === 'is_logged_in') {
      return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
              <a className="navbar-brand" href="/">Qstring</a>
              <ul className="nav justify-content-end">
                <li className="nav-item">
                  <span className="nav-link active text-white" style={{ 'cursor': 'pointer' }} onClick={this.props.logout}>Logout</span>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      );
    } else {
      return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
              <a className="navbar-brand" href="/">Qstring</a>
            </div>
          </nav>
        </div>
      );
    }
	}
}