import React, { Component } from "react";
import Geocode from "react-geocode";

export default class WorkspaceMap extends Component {



  componentDidMount 
  addressToGeoCoordinates = (address, zipcode, city) => {
    var addressDescription = address + " " + zipcode + " " + city;
    Geocode.fromAddress(addressDescription).then(
      response => {
        const { lat, lng } = response.results[0].geometry.location;
        this.setState({
          latitude: lat,
          longitude: lng
        });
      },
      error => {
        console.error(error);
      }
    );
  };

  render() {
    return (
      <div>
        latitude : {this.state.latitude}
        longitude : {this.state.longitude}
      </div>
    );
  }
}
