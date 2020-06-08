import React, { Component } from 'react';
import './App.css';
import Endangered from './Endangered.js';
import Header from './Header.js'
import Footer from './Footer.js'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Endangered />
        <Footer />
      </div>
    )
  }
}