import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import {Swipeable, defineSwipe} from 'react-touch';

class Image extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.state.index = this.props.index;
  }

  render() {

    return (
      <Swipeable config={defineSwipe({swipeDistance: 50})} onSwipeLeft={()=>{this.props.updateIndex(this.state.index + 1)}} onSwipeRight={()=>{this.props.updateIndex(this.state.index - 1)}}>
        <div className={"image active fade"} id={"image-" + this.props.index}>
          <div className="text-wrapper">
            <h1 className="text main">{ReactHtmlParser(this.props.main)}</h1>
            <h3 className="text secondary">{ReactHtmlParser(this.props.secondary)}</h3>
            <p className="text sub">{ReactHtmlParser(this.props.sub)}</p>
          </div>
        </div>
      </Swipeable>
    );
  }
}

export default Image;