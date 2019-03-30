import React from "react";
import axios from "axios";

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
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    var style1 = {
      background: "violet"
    };
    var style2 = {
      background: "pink"
    };
    var style3 = {
      background: "yellow"
    };

    return (
      <div>
        {/* <div className="columns">
          <div className="column is-full" style={style3}>
            <WorkspaceGallery />
          </div>
        </div>
        <div className="columns">
          <div className="column is-three-quarters" style={style1}>
            Hello je suis le contenu sans le booking form
            <WorkspacePresentation />
            <WorkspaceAmenities />
            <WorkspaceMap />
          </div>
          <div className="column is-one-quarter" style={style2}>
            Hello je suis le booking form
          </div>
        </div> */}
        {/* Gallerie photos */}
        <div className="workspace-photos">workspace photos gallery</div>

        {/* Nom, Ville, zipcode, prix/mois, notes, nombre d'avis*/}
        <div className="workspace-header">
          <div className="columns">
            <div className="column name-city">
              <div>{this.state.name}</div>
              <div> {this.state.city}</div>
            </div>
            <div className="column price-review">price and reviews</div>
          </div>
        </div>

        {/* Description */}
        <div className="workspace-description">workspace description</div>

        {/* Tribe Members */}
        <div className="workspace-tribe">workspace tribe</div>

        {/* Location */}
        <div className="workspace-location">workspace location</div>
      </div>
    );
  }
}

export default AdView;
