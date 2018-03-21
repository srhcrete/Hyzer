import React, { Component } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Footer name="Sarah"/>
      </div>
    );
  }
}

export default App;
