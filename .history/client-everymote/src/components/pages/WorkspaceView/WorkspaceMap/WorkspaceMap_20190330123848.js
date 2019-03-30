import React, { Component } from "react";
import Geocode from "react-geocode";

export default class WorkspaceMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: "",
      longitude: ""
    }
  }

  componentDidMount() {
    this.addressToGeoCoordinates(
      this.state.address,
      this.state.zipcode,
      this.state.city
    );
  }

  addressToGeoCoordinates = (address) => {
    Geocode.fromAddress(address).then(
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
        {/* latitude : {this.state.latitude}
        longitude : {this.state.longitude} */}
       { console.log(this.props.address)}
      </div>
    );
  }
}
