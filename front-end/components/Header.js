import React, { Component } from 'react';
import '../scss/header.scss';

class Header extends Component {
  render() {
    return (
      <h1 id='header'> Hello, {this.props.name}  </h1>
    );
  }
}

export default Header;
