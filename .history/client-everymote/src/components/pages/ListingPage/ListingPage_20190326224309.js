import React from "react";
import WorkspaceListing from "../ListingPage/Listing/Listing.js";
import MapSection from "./Map/MapSection.js";
import "./ListingPage.css";
import { Link } from "react-router-dom"


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
