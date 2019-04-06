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

    console.log("WorkspaceMap this.state.workspace 1", this.state.workspace)
  }

  componentWillMount() {
    this.addressToGeoCoordinates(this.props.address);
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
    const position = [this.state.latitude, this.state.longitude];
    { console.log("WorkspaceMap this.state.workspace 2", this.state.workspace)}
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
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png"
          />
          {/* <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker> */}
        </Map>
      </div>
    );
  }
}
