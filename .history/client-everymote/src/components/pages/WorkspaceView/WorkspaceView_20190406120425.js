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

  //   Lorsque le composant est rendu dans la page on fait appel à getSingleProject
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
        console.log("WorkspaceView 2: this.state.address", this.state.address);
      })
      .catch(err => {
        console.log(err);
      });
  };

  getFullAddress = () => {
    return this.state.address + ", " + this.state.city;
  };

  render() {
    {
      console.log("WorkspaceView 3: this.state.address", this.state.address);
    }
    return (
      <div className="workspace-container">
        {/* <div className="workspace-photos">
          <figure class="image is-4by3">
            <img src={this.state.pictures} />
          </figure>
        </div> */}

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
              <WorkspaceMap address={this.state.address} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdView;
