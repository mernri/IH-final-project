import React from "react";
import axios from "axios";
import AnchorLink from "react-anchor-link-smooth-scroll";
import WorkspaceMap from "./WorkspaceMap/WorkspaceMap.js";

import "./WorkspaceView.css";
import WorkspaceTribe from "./WorkspaceTribe/WorkspaceTribe.js";

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
      })
      .catch(err => {
        console.log(err);
      });
  };

  getWorkspaceId = () => {
    const { params } = this.props.match;
    const workspaceId = params.id
    return workspaceId
  };

  getFullAddress = () => {
    return this.state.address + ", " + this.state.city;
  };

  render() {
    return (
      <div className="workspace-container">
        {/* TOP PICTURE */}
        <section className="section workspace-photos">
          <figure className="image">
            <img src={this.state.pictures} alt="" />
          </figure>
        </section>

        <div className="sticky-workspace-header">
          {/* Nom, Ville, zipcode, prix/mois, notes, nombre d'avis*/}
          <section className="section workspace-header">
            <div>
              <div className="title text-left">{this.state.name}</div>
              <div className="subtitle text-left ">
                {this.state.city}, {this.state.zipcode}
              </div>
            </div>

            <div className="subtitle price">
              €{this.state.monthlyPrice} /month
            </div>
          </section>

          {/* THE WORKSPACE NAV (workspace, tribe, events) */}
          <section className="section workspace-nav">
            <div>
              <AnchorLink offset={() => 200} href="#description">
                Description
              </AnchorLink>
            </div>
            <div>
              <AnchorLink offset={() => 200} href="#amenities">
                Amenities
              </AnchorLink>
            </div>
            <div>
              <AnchorLink offset={() => 200} href="#tribe">
                Tribe
              </AnchorLink>
            </div>
            <div>
              <AnchorLink offset={() => 200} href="#location">
                Location
              </AnchorLink>
            </div>
          </section>
        </div>

        <section className="section workspace-content">
          {/* Description */}
          <section
            className="section workspace-description text-left"
            id="description"
          >
            <div className="subtitle">
              <strong>Description</strong>
            </div>
            {this.state.description}
          </section>

          {/* Amenities */}
          <section
            className="section workspace-amenities text-left"
            id="amenities"
          >
            <div className="subtitle">
              <strong>Amenities</strong>
            </div>
            Amenities are coming
          </section>

          {/* Tribe */}
          <section className="section workspace-tribe text-left" id="tribe">
            <div className="subtitle">
              <strong>Tribe</strong>
            </div>
            <WorkspaceTribe workspaceId={this.getWorkspaceId()}/>
          </section>

          {/* Location */}
          <section
            className="section workspace-location text-left"
            id="location"
          >
            <div>
              <span className="subtitle">
                <strong>Location</strong>
              </span>
              <span id="address">
                {this.state.address}, {this.state.zipcode} - {this.state.city}
              </span>
            </div>

            <div className="workspace-map">
              <WorkspaceMap address={this.getFullAddress()} />
            </div>
          </section>
        </section>
      </div>
    );
  }
}

export default AdView;
