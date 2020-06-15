import React, { Component } from 'react';
import './Endangered.css'
import endangered from './images/endangered.png'
import ReactPlayer from "react-player"
import axios from "axios"




export default class Endangered extends Component {
  state = {
    species: []
  };

  async componentDidMount() {
    const response = await axios("https://www.bloowatch.org/developers/json/species");
    console.log(response);
    this.setState({ species: response.data.allSpecies });
  }

  render() {
    return (
      <div className="endangered">
        <img src={endangered}></img>
        <ReactPlayer className="video"
          url="https://www.youtube.com/watch?v=FsX71DHVO8k" />
        <h1><center>More Information:</center></h1>
        {this.state.species.map(species => (
          <div key={species._id}>
            <div className="name">{species.name}</div>
            <div className="description">{species.description}</div>
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