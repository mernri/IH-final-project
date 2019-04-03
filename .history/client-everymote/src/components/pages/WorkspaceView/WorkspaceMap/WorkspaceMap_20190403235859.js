import React, { Component } from "react";
import axios from "axios";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

export default class WorkspaceMap extends Component {
  // constructor(props) {
  //   super(props);

    // !!!!!!!!!!!!!
    // N'ARRIVE PAS A RECUPERER L'ADRESSE ENVOYER EN PROPS PAR WORKSPACEVIEW.JS
    // !!!!!!!!!!!!!  (undefined)
  //   this.state = {
  //     workspace: {},
  //     latitude: "",
  //     longitude: "",
  //     zoom: 15
  //   };
  // }

  

  // componentDidMount() {
  //   console.log(this.props.address)
  //   this.getWorkspaceCoordinates(this.props.workspace.fullAddress)
  // } 

  // getWorkspaceCoordinates = async fullAddress => {
  //   const APIKEY = "yPCdzT6YO4vPW3vyeCEctUZ71KsASll6";
  //   const url = `http://open.mapquestapi.com/geocoding/v1/address?key=${APIKEY}&location=${fullAddress}`;
  //   let response = {};
  //   let latitude;
  //   let longitude;

  //   try {
  //     response = await axios.get(url);
  //     latitude = await response.data.results[0].locations[0].latLng.lat;
  //     longitude = await response.data.results[0].locations[0].latLng.lng;

  //     await this.setState({
  //       latitude: latitude,
  //       longitude: longitude
  //     });
  //     console.log(this.props.address)

  //   } catch (err) {
  //     console.log(err);
  //   }
  // };


  render() {
    const position = [this.props.workspace.latitude, this.props.workspace.longitude];

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
