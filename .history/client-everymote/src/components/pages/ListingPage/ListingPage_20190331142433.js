import React from "react";
import WorkspaceListing from "./Listing/WorkspaceListing.js";
import MapSection from "./Map/MapSection.js";
import { Link } from "react-router-dom";
// import "./ListingPage.css";

import "bulma/css/bulma.css";
import ResultsHeader from "./ResultsHeader/ResultsHeader.js";

class ListingPage extends React.Component {
  constructor(props) {
    super(props)
  }

  toggleView = () => {

  }


  render() {
    var style1 = {
      background: "violet"
    };
    var style2 = {
      background: "pink"
    }

    return (
      <div>
        <ResultsHeader/>

        <div className="tomap-button">
          <Link className="button is-info toggle-map">
            View on map
          </Link>
          <Link to="/add-workspace" className="button is-info toggle-map">
            add a workspace
          </Link>
        </div>

        <div className="workspaces-view" style={{ marginLeft: "100px", marginRight: "100px" }}>
          <WorkspaceListing />
        </div>
      </div>
    );
  }
}

export default ListingPage;
