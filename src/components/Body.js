import React, { Component } from 'react';
import data from '../masonry_data.json';
import _ from 'lodash';
import mo from 'moment';
import GridItem from './GridItem';
import grid1 from '../images/grid-1.jpg';
import grid2 from '../images/grid-2.jpg';
import grid3 from '../images/grid-3.jpg';
import grid4 from '../images/grid-4.jpg';
import grid5 from '../images/grid-5.jpg';
import grid6 from '../images/grid-6.jpg';
// import MasonryInfiniteScroller from 'react-masonry-infinite';


class Body extends Component {
  constructor(props) {
    super();
    this.state = {};
    this.state.images = {"grid-1": grid1, "grid-2": grid2, "grid-3": grid3, "grid-4": grid4, "grid-5": grid5, "grid-6": grid6};
    this.state.gridData = [];
    this.state.numberOfColumns = [];

  }
  componentWillMount() {
    let a = _.map(data, (v, i)=>{
      let b = {};
      b.title = v.title;
      b.author = v.author;

      b.date = mo(v.date, "MM/DD/YYYY");

      let d = v.img.split("/")[2].split(".")[0];
      b.img = this.state.images[d];
      return b;
    });
    a = _.sortBy(a, function(c) { return c.date.format(); }).reverse();
    a = _.map(a, (v, i) =>{
      let b = {};
      b.index = i + 1;
      return _.extend(v, b);
    });

    this.setState({
      gridData: a
    });
  }
  componentDidMount() {
    this.setNumberOfColumns();
    window.addEventListener("resize", this.setNumberOfColumns.bind(this));
  }
  setNumberOfColumns() {
    let c = [];
    if (window.outerWidth >= 1024) {
      c = [1,2,3];
    } else if (window.outerWidth < 1024 && window.outerWidth >= 548) {
      c = [1,2];
    } else {
      c = [1];
    }
    this.setState({
      numberOfColumns: c
    });
  }

  render() {
    const self = this;
    let g = [];
    this.state.numberOfColumns.map((v) => {
      let s = self.state.gridData.map((w, j) => {
        if (window.outerWidth >= 1024) {
          if (w.index === v || w.index === v + 3) {
           return g.push(<GridItem key={"date-" + j} gridItemData={w} />);
          }
        } else if (window.outerWidth < 1024 && window.outerWidth >= 548) {
          if (w.index === v || w.index === v + 2 || w.index === v + 4) {
            return g.push(<GridItem key={"date-" + j} gridItemData={w} />);
          }
        } else {
          return g.push(<GridItem key={"date-" + j} gridItemData={w} />);
        }
        return g;
      });
      return s;
    });
    return (
      <div className="Body">
        <div className="Masonry">
          {g}
        </div>
      </div>
    );
  }
}

export default Body;