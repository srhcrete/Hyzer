import React, { Component } from 'react';
import '../scss/header.scss';

class Header extends Component {
  render() {
    return (
      <header>
        <div className='header-banner'>
          <div className='header-logo'>Logo goes here</div>
          <h1 id='header'> Hyzer </h1>
        </div>
        <div className='clear'></div>
        <nav>
          <ul>
            <li>Home</li>
            <li>Game</li>
            <li>Profile</li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
