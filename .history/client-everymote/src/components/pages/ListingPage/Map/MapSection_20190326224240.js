import React from "react";
import "./MapSection.css";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Link } from "react-router-dom;"

class MapSection extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: 48.8716,
      lng: 2.3109100000000353,
      zoom: 15
    };
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <div>
        {/* MAP TOGGLE FOR MOBILE */}
        <Link to="/workspaces" class="button is-info toggle-map">List view</Link>

        {/* END OF MAP TOGGLE FOR MOBILE */}
        <Map center={position} zoom={this.state.zoom}>
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

export default MapSection;
