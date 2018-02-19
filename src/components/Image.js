import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';

class Image extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className={"image active fade"} id={"image-" + this.props.index}>
        <div className="text-wrapper">
          <h1 className="text main">{ReactHtmlParser(this.props.main)}</h1>
          <h3 className="text secondary">{ReactHtmlParser(this.props.secondary)}</h3>
          <p className="text sub">{ReactHtmlParser(this.props.sub)}</p>
        </div>
      </div>
    );
  }
}

export default Image;