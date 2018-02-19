import React, { Component } from 'react';

class HamburgerMenu extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {

    return (
      <div className={this.props.active ? "HamburgerMenu active fade" : "HamburgerMenu inactive"}>
        <div className="Close" onClick={()=>{this.props.handleHamburger()}}>X</div>
        <ul>
          <li><a href="/" onClick={()=>{this.props.handleHamburger()}}>home</a></li>
          <li><a href="/" onClick={()=>{this.props.handleHamburger()}}>about</a></li>
          <li><a href="/" onClick={()=>{this.props.handleHamburger()}}>book</a></li>
          <li><a href="tel:2125555555" onClick={()=>{this.props.handleHamburger()}}>212.555.5555</a></li>
          <li><a href="/" onClick={()=>{this.props.handleHamburger()}}>sparta@plaesent.com</a></li>
        </ul>
      </div>

    );
  }
}

export default HamburgerMenu;