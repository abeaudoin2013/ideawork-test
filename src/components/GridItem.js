import React, { Component } from 'react';
import Moment from 'react-moment';


class GridItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.date = props.gridItemData.date;
    this.state.img = props.gridItemData.img;
    this.state.title = props.gridItemData.title;
    this.state.author = props.gridItemData.author;
    this.state.index = props.gridItemData.index;
  }
  render() {
    console.log(this.state.index);
    return (
      <div className="GridItem">
        <div className="Column--wrapper">
          <img src={this.state.img} className="img" alt=""/>
          <p className="sub text date"><Moment format="MMMM D YYYY">{this.state.date}</Moment></p>
          <h1 className="main text">{this.state.title}</h1>
          <p className="sub text author">presented by <a href="/" className="link">{this.state.author}</a></p>
        </div>
      </div>
    );
  }
}

export default GridItem;