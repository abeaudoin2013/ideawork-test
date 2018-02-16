import React, { Component } from 'react';

class Carousel extends Component {

  render() {

    return (
      <div className="Carousel">
        <div className="image" id="image-1">
          <div className="text-wrapper">
            <h1 className="text main">Screening: <br />DVF Secret Agent Part 2</h1>
            <h3 className="text secondary">October 15, 2017</h3>
            <p className="text sub">Join us for a private screen of DVF Secret Agent Part 2<br />with our special guest, director Peter Lindberg</p>
          </div>
        </div>
        {/*<div className="image" />*/}
        {/*<div className="image" />*/}
        <div className="nav-dots">
          <div className="nav-dot active" id="nav-dot-1"/>
          <div className="nav-dot center" id="nav-dot-2"/>
          <div className="nav-dot" id="nav-dot-3"/>
        </div>
      </div>
    );
  }
}

export default Carousel;