import React, { Component } from "react";
import axios from "axios";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

export default class WorkspaceMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      workspace: {},
      latitude: "",
      longitude: "",
      zoom: 15
    };
  }

  addressToGeoCoordinates = address => {
    const APIKEY = "yPCdzT6YO4vPW3vyeCEctUZ71KsASll6";
    const url = `http://open.mapquestapi.com/geocoding/v1/address?key=${APIKEY}&location=${address}`;
    axios.get(url).then(
      function(response) {
        const latitude = response.data.results[0].locations[0].latLng.lat;
        const longitude = response.data.results[0].locations[0].latLng.lng;
        this.setState({
          latitude: latitude,
          longitude: longitude
        });
      }.bind(this)
    );
  };

  render() {
    {this.addressToGeoCoordinates(this.props.address)}
    const position = [this.state.latitude, this.state.longitude];

    return (
      <div>
        <Map
          center={position}
          zoom={this.state.zoom}
          ref={m => {
            this.leafletMap = m;
          }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            url="https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={pk.eyJ1IjoibWVybnJpIiwiYSI6ImNqdG5iYm4xZzJqYW00M214dHVmeGJyMTAifQ.aTSG5CceX4Jarg461NmyBw}"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </Map>
      </div>
    );
  }
}
