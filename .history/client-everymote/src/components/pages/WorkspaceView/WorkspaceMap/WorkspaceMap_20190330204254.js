import React, { Component } from "react";
import axios from "axios";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";



export default class WorkspaceMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: "",
      longitude: ""
    };
  }

  componentDidMount() {
    this.addressToGeoCoordinates(
      this.state.address,
      this.state.zipcode,
      this.state.city
    );
    console.log(this.addressToGeoCoordinates(this.props.address));
  }

  addressToGeoCoordinates = (address) => {
    const APIKEY = "yPCdzT6YO4vPW3vyeCEctUZ71KsASll6";
    const url = `http://open.mapquestapi.com/geocoding/v1/address?key=${APIKEY}&location=${address}`
    axios.get(url).then(
      function(response) {
        let latitude = response.data.results[0].locations[0].latLng.lat;
        let longitude = response.data.results[0].locations[0].latLng.lng;
        this.setState({
          latitude: latitude,
          longitude: longitude
        });
      }.bind(this)
    )
  };

  render() {
    const position = [this.state.lat, this.state.lng];

    return (
      <div>
      <Map center={position} zoom={this.state.zoom} ref={m => {
          this.leafletMap = m;
        }}>
      </div>
    );
  }
}
