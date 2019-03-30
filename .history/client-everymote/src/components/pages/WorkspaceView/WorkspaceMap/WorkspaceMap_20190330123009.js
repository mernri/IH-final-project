import React, { Component } from 'react'

export default class WorkspaceMap extends Component {

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
        
      </div>
    )
  }
}
