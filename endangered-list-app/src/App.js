import React, { Component } from 'react';
import Endangered from './Endangered.js';
import Header from './Header.js'
import Footer from './Footer.js'
import './App.css'
import { Link, BrowserRouter } from 'react-router-dom';


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
        <BrowserRouter>
          <Link className="home">Home</Link>
        </BrowserRouter>
        <Endangered />
        <Footer />
      </div>
    )
  }
}