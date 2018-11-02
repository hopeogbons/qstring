import { Component } from 'react';
import React from "react";

export default class Footer extends Component {
	render() {
    return (
      <footer className="fixed-bottom bg-white">
        <hr/>
        <div className="container"><p>&copy; eHealth Africa</p></div>
      </footer>
    );
	}
}