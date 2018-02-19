import React, { Component } from 'react';
import logo from '../logo.svg';
import HamburgerMenu from './HamburgerMenu';

class Header extends Component {
  constructor(props) {
    super();
    this.state = {};
    this.state.active = false;

    this.handleHamburger = this.handleHamburger.bind(this);
  }
  handleHamburger() {
    this.setState({
      active: !this.state.active
    });
  }
  render() {

    return (
      <header className="Header">
        <div className="Wrapper">
          <a href="/" className="Wrapper-logo">
            <img src={logo} id="Logo" alt="Sparta Pleseant"/>
          </a>
          <nav className="nav">
            <ul>
              <li id="Hamburger" onClick={()=>{this.handleHamburger()}}>
                <div className="line" id="line-1" />
                <div className="line" id="line-2" />
                <div className="line" id="line-3" />
              </li>
              <li>
                <a href="/">login</a>
              </li>
              <li>
                <a href="tel:2125555555">212.555.5555</a>
              </li>
            </ul>
          </nav>
        </div>
        <HamburgerMenu active={this.state.active} handleHamburger={this.handleHamburger}/>
      </header>
    );
  }
}

export default Header;