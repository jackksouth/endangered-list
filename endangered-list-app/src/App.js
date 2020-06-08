import React, { Component } from 'react';
import './App.css';
import header from './Header.js'
import footer from './Footer.js'
import axios from 'axios';

export default class App extends React.Component {
  state = {
    loading: true,
    species: [],
  };

  async componentDidMount() {
    const response = await fetch("http://www.bloowatch.org/developers/json/species");
    const data = await response.json();
    console.log(data);
    this.setState({ species: data.allSpecies, loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }

    if (!this.state.species.length) {
      return <div>Species not rendered</div>;
    }

    return (
      <div>
        {this.state.species.map(species => (
          <div key={species._id}>
            <div>{species.name}</div>
            <div>{species.description}</div>
            <div>{species.status}</div>
            <div>{species.population}</div>
            <div>{species.scientific_name}</div>
            <div>{species.location}</div>
            <div>{species.habitat}</div>
          </div>
        ))}
      </div>
    );
  }
}