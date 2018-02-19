import React, { Component } from 'react';
import Data from '../carousel_data.json';
import ReactHtmlParser from 'react-html-parser';

let interval;
class Carousel extends Component {

  constructor(props) {
    super();
    this.state = {};
    this.state.index = 0;
    this.state.carouselItems = Data;
    this.state.active = true;

    this.setIndex = this.setIndex.bind(this);
    this.updateIndex = this.updateIndex.bind(this);
  }
  componentDidMount() {
    console.log("did mount");
    interval = setInterval(()=>{this.setIndex()}, 5000);
  }
  static determine(arg) {
    if (arg < 0) {
      return 2;
    } else if (arg > 2) {
      return 0;
    } else {
      return arg;
    }
  }
  updateIndex(arg) {
    this.setState({index: arg});
    clearTimeout(interval);
    this.componentDidMount();
  }
  makeActive(arg) {
    this.setState({
      active: arg
    })
  }

  setIndex() {
    const self = this;
    let i = this.state.index,
    next;
    this.makeActive(false);

    if (i >= 2) {
      next = 0;
    } else {
      next = i + 1;
    }
    self.setState({index: next}, ()=> {self.makeActive(true)});
  }

  render() {


    return (
      <div className="Carousel">
        {/*<div className="image inactive" id={"image-" + Carousel.determine(this.state.index - 1)}>*/}
          {/*<div className="text-wrapper">*/}
            {/*<h1 className="text main">{this.state.carouselItems[Carousel.determine(this.state.index - 1)].main}</h1>*/}
            {/*<h3 className="text secondary">{this.state.carouselItems[Carousel.determine(this.state.index - 1)].secondary}</h3>*/}
            {/*<p className="text sub">{this.state.carouselItems[Carousel.determine(this.state.index - 1)].sub}</p>*/}
          {/*</div>*/}
        {/*</div>*/}
        <div className={this.state.active ? "image active fade" : "image inactive fade"} id={"image-" + this.state.index}>
          <div className="text-wrapper">
            <h1 className="text main">{ReactHtmlParser(this.state.carouselItems[Carousel.determine(this.state.index)].main)}</h1>
            <h3 className="text secondary">{ReactHtmlParser(this.state.carouselItems[Carousel.determine(this.state.index)].secondary)}</h3>
            <p className="text sub">{ReactHtmlParser(this.state.carouselItems[Carousel.determine(this.state.index)].sub)}</p>
          </div>
        </div>
        {/*<div className="image inactive" id={"image-" + Carousel.determine(this.state.index + 1)}>*/}
          {/*<div className="text-wrapper">*/}
            {/*<h1 className="text main">{this.state.carouselItems[Carousel.determine(this.state.index + 1)].main}</h1>*/}
            {/*<h3 className="text secondary">{this.state.carouselItems[Carousel.determine(this.state.index + 1)].secondary}</h3>*/}
            {/*<p className="text sub">{this.state.carouselItems[Carousel.determine(this.state.index + 1)].sub}</p>*/}
          {/*</div>*/}
        {/*</div>*/}
        {/*<div className="image" />*/}
        {/*<div className="image" />*/}
        <div className="nav-dots">
          <div className={this.state.index === 0 ? "nav-dot active" : "nav-dot"} id="nav-dot-0" onClick={()=>{this.updateIndex(0)}}/>
          <div className={this.state.index === 1 ? "nav-dot center active" : "nav-dot center"} onClick={()=>{this.updateIndex(1)}}/>
          <div className={this.state.index === 2 ? "nav-dot active" : "nav-dot"} id="nav-dot-2" onClick={()=>{this.updateIndex(2)}}/>
        </div>
      </div>
    );
  }
}

export default Carousel;