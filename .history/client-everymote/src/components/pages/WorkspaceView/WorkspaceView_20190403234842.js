import React from "react";
import axios from "axios";
import "./WorkspaceView.css";
import WorkspaceMap from "./WorkspaceMap/WorkspaceMap.js";

// import WorkspaceGallery from "./WorspaceGallery/WorkspaceGallery.js";
// import WorkspacePresentation from "./AdviewPresentation.js";
// import WorkspaceAmenities from "./AdViewAmenities.js";
// import WorkspaceMap from "./AdViewMap.js";

class AdView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  //   Lorsque le composant va être rendu dans la page on fait appel à getSingleProject
  componentWillMount() {
    this.getSingleWorkspace();
  }

  getSingleWorkspace = () => {
    const { params } = this.props.match;
    axios
      .get(`http://localhost:5000/api/workspace/${params.id}`)
      .then(responseFromApi => {
        const theWorkspace = responseFromApi.data;
        this.setState(theWorkspace);
        console.log("workspaceView state : ", this.state)
      })
      .catch(err => {
        console.log(err);
      });
  };

  getFullAddress = () => {
    return this.state.address + ", " + this.state.city;
  };

  addressToGeoCoordinates = getFullAddress => {
    const APIKEY = "yPCdzT6YO4vPW3vyeCEctUZ71KsASll6";
    const url = `http://open.mapquestapi.com/geocoding/v1/address?key=${APIKEY}&location=${getFullAddress}`;
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
    return (
      <div>
        <div className="workspace-photos">
          <figure className="image is-4by3">
            <img src={this.state.pictures} />
          </figure>
        </div>

        {/* Nom, Ville, zipcode, prix/mois, notes, nombre d'avis*/}
        <div className="workspace-header">
          <div className="columns">
            <div className="column name-city">
              <div className="title">{this.state.name}</div>
              <div className="subtitle">
                {this.state.city}, {this.state.zipcode}
              </div>
            </div>

            <div className="column price-review">
              <div className="subtitle" />
              <div className="subtitle">€{this.state.monthlyPrice} /month</div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="workspace-description"> {this.state.description} </div>

        {/* Tribe Members */}
        <div className="workspace-tribe">The Tribe</div>

        {/* Location */}
        <div className="workspace-location">
          <div>Location</div>
          <div>
            {this.getFullAddress()}
            <div className="workspace-map">
              <WorkspaceMap workspace={this.state} address={this.getFullAddress()} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdView;
