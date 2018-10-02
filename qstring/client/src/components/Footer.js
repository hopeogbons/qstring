import { Component } from 'react';
import React from "react";

export default class Footer extends Component {
	render() {
    return (
      <footer className="fixed-bottom">
        <hr/>
        <div className="container"><p>&copy; 2018</p></div>
      </footer>
    );
	}
}