import React from "react";
import WorkspaceListing from "./Listing/WorkspaceListing.js";
import MapSection from "./Map/MapSection.js";
import { Link } from "react-router-dom";
// import "./ListingPage.css";

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

        <div className="tomap-button">
          <Link className="button is-info toggle-map">
            View on map
          </Link>
          <Link to="/add-workspace" className="button is-info toggle-map">
            add a workspace
          </Link>
        </div>

        <div className="workspaces-view" style={{ margin: "30px" }}>
          <WorkspaceListing />
        </div>
      </div>
    );
  }
}

export default ListingPage;
