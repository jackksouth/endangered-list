import React, { Component } from 'react';
import './Endangered.css'
import endangered from './images/endangered.png'


export default class Endangered extends Component {
  state = {
    species: []
  };

  async componentDidMount() {
    const response = await fetch("http://www.bloowatch.org/developers/json/species");
    const data = await response.json();
    console.log(data);
    this.setState({ species: data.allSpecies });
  }

  render() {
    return (
      <div className="endangered">
        <img src={endangered}></img>
        <h1><center>These are the most well-known animals currently endangered:</center></h1>
        {this.state.species.map(species => (
          <div key={species._id}>
            <div className="name">{species.name}</div>
            <div className="description">Description: {species.description}</div>
            <div className="status">Status: {species.status}</div>
            <div className="population">Population: {species.population}</div>
            <div className="scientific-name">Scientific Name: {species.scientific_name}</div>
            <div className="location">Location: {species.location}</div>
            <div className="habitat">Habitat: {species.habitat}</div>
          </div>
        ))}
      </div>
    );
  }
}