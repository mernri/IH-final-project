import React from "react";
import WorkspaceListing from "./Listing/WorkspaceListing.js";
import MapSection from "./Map/MapSection.js";
import { Link } from "react-router-dom"
import "./ListingPage.css";


import "bulma/css/bulma.css";

class ListingPage extends React.Component {
  render() {
    var style1 = {
      background: "violet"
    };
    var style2 = {
      background: "pink"
    };

    return (
      <div>
        <div className="columns">
          <div className="column is-three-fifths" style={style1}>
            {/* MAP TOGGLE FOR MOBILE */}
            <Link to="/workspaces-map" class="button is-info toggle-map">Map view</Link>
            {/* END OF MAP TOGGLE FOR MOBILE */}
            Add a new workspace :  
            <Link to="/workspace/add" class="button is-info toggle-map">Map view</Link>

            <WorkspaceListing />
          </div>
          <div className="column is-two-fifths home-map" style={style2}>
            <MapSection />
          </div>
        </div>
      </div>
    );
  }
}

export default ListingPage;
