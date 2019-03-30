import React from "react";
import axios from "axios";

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
  componentDidMount() {
    this.getSingleWorkspace();
  }

  getSingleWorkspace = () => {
    const { params } = this.props.match;
    axios
      .get(`http://localhost:5000/api/workspace/${params.id}`)
      .then(responseFromApi => {
        const theWorkspace = responseFromApi.data;
        this.setState(theWorkspace);
        console.log(theWorkspace)
      })
      .catch(err => {
        console.log(err);
      });
  };

  getFullAddress = (address, zipcode, city) => {
    return address + " " + zipcode + " " + city;
  };

  render() {
    return (
      <div>
        <div className="workspace-photos">workspace photos gallery</div>

        {/* Nom, Ville, zipcode, prix/mois, notes, nombre d'avis*/}
        <div className="workspace-header">
          <div className="columns">
            <div className="column name-city">
              <div>{this.state.name}</div>
              <div> {this.state.city}</div>
            </div>
            <div className="column price-review">
              €{this.state.monthlyPrice} /month
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
            {this.state.address}, {this.state.zipcode} {this.state.city}
            <div id="workspace-map">
              <WorkspaceMap
                address={this.getFullAddress(
                  this.state.address,
                  this.state.zipcode,
                  this.state.city
                )}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdView;
