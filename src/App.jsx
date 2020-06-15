import React, { Component } from 'react';
import Endangered from './Endangered.jsx';
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import './App.css'
import axios from "axios"


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