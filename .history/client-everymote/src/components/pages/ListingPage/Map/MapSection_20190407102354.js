import React from "react";
import "./MapSection.css";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
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
      latitude: 0,
      longitude: 0,
      zoom: 13
    };
  }

  getCityCoordinates = async city => {
    const APIKEY = "lIlwmyAyKX9cCMCpWgsLXGS5ZWvrNG0X";
    const url = `http://open.mapquestapi.com/geocoding/v1/address?key=${APIKEY}&location=${city}`;
    let response = {};
    let latitude;
    let longitude;

    try {
      response = await axios.get(url);
      latitude = await response.data.results[0].locations[0].latLng.lat;
      longitude = await response.data.results[0].locations[0].latLng.lng;

      await this.setState({
        latitude: latitude,
        longitude: longitude
      });
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount() {
    this.getCityCoordinates("paris");
  }

  // Permet d'updater le centre de la map quand je veux voir les workspaces dans une autre ville
  // Attention, cette methode de lifecycle est du legacy, je ne devrais pas l'utiliser
  componentWillReceiveProps() {
    this.props.city
      ? this.getCityCoordinates(this.props.city)
      : this.getCityCoordinates("paris");
    console.log(
      " je suis entrain de claquer tout ton quota d'appel API dispo. deal with it "
    );
  }

  render() {
    const position = [this.state.latitude, this.state.longitude];
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
              <Marker position={workspacePosition} key={workspace._id}>
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
