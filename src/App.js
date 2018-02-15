import React, { Component } from 'react';
import Carousel from './components/Carousel';
import Header from './components/Header';
import Footer from  './components/Footer';
import Body from './components/Body';
// import logo from './logo.svg';
import './styles/App.css';

class App extends Component {

  render() {

    return (
      <div className="App">
        <Header />
        <Carousel/>
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
