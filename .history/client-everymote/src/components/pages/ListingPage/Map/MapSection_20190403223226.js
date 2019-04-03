import React from "react";
import "./MapSection.css";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import * as ELG from "esri-leaflet-geocoder";
import { Link } from "react-router-dom";
import axios from "axios";


delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-shadow.png"
});

class MapSection extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: 48.8585,
      lng: 2.348549999999932,
      zoom: 13
    };
  }

  getCityCoordinates = async city  => {
    const APIKEY = "yPCdzT6YO4vPW3vyeCEctUZ71KsASll6";
    const url = `http://open.mapquestapi.com/geocoding/v1/address?key=${APIKEY}&location=${city}`;
    let response = {};
    let latitude;
    let longitude;

    try {
      response = await axios.get(url);
      latitude = await response.data.results[0].locations[0].latLng.lat;
      longitude = await response.data.results[0].locations[0].latLng.lng;
      console.log("latitude de la ville", latitude);

      await this.setState({
        latitude: latitude,
        longitude: longitude
      });
    } catch (err) {
      console.log(err);
    }

    console.log("ma city baby boy" ,this.state.city);

  } 

  // Ajoute le search d'adresse à Leaflet
  componentDidMount() {
    this.getCityCoordinates(this.props.city)
    const map = this.leafletMap.leafletElement;
    const searchControl = new ELG.Geosearch().addTo(map);
    const results = new L.LayerGroup().addTo(map);

    searchControl.on("results", function(data) {
      results.clearLayers();
      for (let i = data.results.length - 1; i >= 0; i--) {
        results.addLayer(L.marker(data.results[i].latlng));
      }
    });
  }

  render() {
    const position = [48.8716, 2.3109100000000353];
    return (
      <div>
        {/* END OF MAP TOGGLE FOR MOBILE */}
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

          {this.props.workspaces.map(workspace => {
            const workspacePosition = [workspace.latitude, workspace.longitude];

            return (
              <Marker position={workspacePosition}>
                <Popup>
                  <Link to={`/workspace/${workspace._id}`}>
                    <div className="card-image">
                      <figure className="image ">
                        <img src={workspace.pictures[0]} alt="Placeholder" />
                      </figure>
                    </div>
                    <div className="media">
                      <div className="media-content">
                        <div className="columns">
                          <p className="subtitle column is-two-thirds">
                            <strong> {workspace.name} </strong>
                          </p>
                          <p className="column">
                            €{workspace.monthlyPrice} /mo
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </Popup>
              </Marker>
            );
          })}
        </Map>
      </div>
    );
  }
}

export default MapSection;
