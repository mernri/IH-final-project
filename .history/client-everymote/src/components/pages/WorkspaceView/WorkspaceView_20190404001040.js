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

  //   Lorsque le composant va être rendu dans la page on fait appel à getSingleWorkspace
  componentWillMount() {
    this.getSingleWorkspace();
  }

  getSingleWorkspace = async () => {
    const { params } = this.props.match;
    let responseFromApi = {};

    responseFromApi = await axios.get(
      `http://localhost:5000/api/workspace/${params.id}`
    );
    const theWorkspace = await responseFromApi.data;
    await this.setState(theWorkspace);
    await console.log("workspaceView state : ", this.state);
  };

  getFullAddress = () => {
    return this.state.address + ", " + this.state.city;
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
              {console.log("this state : ", this.state)}
              {/* <WorkspaceMap
                workspace={this.state}
              /> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdView;
