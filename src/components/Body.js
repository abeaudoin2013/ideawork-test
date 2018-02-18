import React, { Component } from 'react';
import data from '../data.json';
import _ from 'lodash';
import mo from 'moment';
import GridItem from './GridItem';
import grid1 from '../images/grid-1.jpg';
import grid2 from '../images/grid-2.jpg';
import grid3 from '../images/grid-3.jpg';
import grid4 from '../images/grid-4.jpg';
import grid5 from '../images/grid-5.jpg';
import grid6 from '../images/grid-6.jpg';

class Body extends Component {
  constructor(props) {
    super();
    this.state = {};
    this.state.images = {"grid-1": grid1, "grid-2": grid2, "grid-3": grid3, "grid-4": grid4, "grid-5": grid5, "grid-6": grid6};
    this.state.gridData = [];
  }
  componentWillMount() {
    let a = _.map(data, (v, i)=>{
      let b = {};
      b.title = v.title;
      b.author = v.author;
      b.index = i + 1;
      b.date = mo(v.date, "MM/DD/YYYY");

      let d = v.img.split("/")[2].split(".")[0];
      b.img = this.state.images[d];
      return b;
    });
    a = _.sortBy(a, function(c) { return c.date.format(); }).reverse();
    this.setState({
      gridData: a
    });
  }
  render() {
    const gridItem = this.state.gridData.map((v, i) =>
      <GridItem key={"date-" + i} gridItemData={v}>

      </GridItem>
    );
    return (
      <div className="Body">
        <div className="Wrapper">
          {gridItem}
          {/*<div className="Column">*/}
            {/*<div className="Column--wrapper">*/}
              {/*<img src="http://via.placeholder.com/348x348" className="img" alt=""/>*/}
              {/*<p className="sub text date">date</p>*/}
              {/*<h1 className="main text">Bureaux exquisite delightful carefully curated soft power.</h1>*/}
              {/*<p className="sub text author">presented by <a href="/" className="link">lorem ipsum</a></p>*/}
            {/*</div>*/}
            {/*<div className="Column--wrapper">*/}
              {/*<img src="http://via.placeholder.com/348x348" className="img" alt=""/>*/}
              {/*<p className="sub text date">date</p>*/}
              {/*<h1 className="main text">Sharp bureaux sleepy K-pop carefully curated </h1>*/}
              {/*<p className="sub text author">presented by <a href="/" className="link">lorem ipsum</a></p>*/}
            {/*</div>*/}
          {/*</div>*/}
          {/*<div className="Column">*/}
            {/*<div className="Column--wrapper">*/}
              {/*<img src="http://via.placeholder.com/348x348" className="img" alt=""/>*/}
              {/*<p className="sub text date">date</p>*/}
              {/*<h1 className="main text">Bureaux exquisite delightful carefully curated soft power.</h1>*/}
              {/*<p className="sub text author">presented by <a href="/" className="link">lorem ipsum</a></p>*/}
            {/*</div>*/}
            {/*<div className="Column--wrapper">*/}
              {/*<img src="http://via.placeholder.com/348x348" className="img" alt=""/>*/}
              {/*<p className="sub text date">date</p>*/}
              {/*<h1 className="main text">Bureaux exquisite delightful carefully curated soft power.</h1>*/}
              {/*<p className="sub text author">presented by <a href="/" className="link">lorem ipsum</a></p>*/}
            {/*</div>*/}
          {/*</div>*/}
          {/*<div className="Column">*/}
            {/*<div className="Column--wrapper">*/}
              {/*<img src="http://via.placeholder.com/348x348" className="img" alt=""/>*/}
              {/*<p className="sub text date">date</p>*/}
              {/*<h1 className="main text">Bureaux exquisite delightful carefully curated soft power.</h1>*/}
              {/*<p className="sub text author">presented by <a href="/" className="link">lorem ipsum</a></p>*/}
            {/*</div>*/}
            {/*<div className="Column--wrapper">*/}
              {/*<img src="http://via.placeholder.com/348x348" className="img" alt=""/>*/}
              {/*<p className="sub text date">date</p>*/}
              {/*<h1 className="main text">Bureaux exquisite delightful carefully curated soft power.</h1>*/}
              {/*<p className="sub text author">presented by <a href="/" className="link">lorem ipsum</a></p>*/}
            {/*</div>*/}
          {/*</div>*/}
        </div>
      </div>
    );
  }
}

export default Body;