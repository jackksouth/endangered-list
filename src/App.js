import React, { Component } from 'react';
import Endangered from './Endangered.js';
import Header from './Header.js'
import Footer from './Footer.js'
import './App.css'


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