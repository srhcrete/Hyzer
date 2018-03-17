import React, { Component } from 'react';
import '../scss/footer.scss';

class Footer extends Component {
  render() {
    return (
      <h1 id='footer'> Hello, {this.props.name} </h1>
    );
  }
}

export default Footer;
