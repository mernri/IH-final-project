import React from "react";
import WorkspaceListing from "./Listing/WorkspaceListing.js";
import MapSection from "./Map/MapSection.js";
import { Link } from "react-router-dom";
// import "./ListingPage.css";

import "bulma/css/bulma.css";
import ResultsHeader from "./ResultsHeader/ResultsHeader.js";

class ListingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "listing"
    };
  }

  toggleView = () => {
    this.state.view === "listing"
      ? this.setState({ view: "map" })
      : this.setState({ view: "listing" });

      this.state.view === "map"
      ? this.setState({ view: "listing" })
      : this.setState({ view: "map" });
  };

  render() {
    var style1 = {
      background: "violet"
    };
    var style2 = {
      background: "pink"
    };

    return (
      <div>
        <ResultsHeader />

        <div
          className="workspaces-view"
          style={{ marginLeft: "100px", marginRight: "100px" }}
        >
          {this.state.view === "listing" ? (
            <WorkspaceListing
              view={() => {
                this.toggleView();
              }}
            />
          ) : (
            <MapSection
              view={() => {
                this.toggleView();
              }}
            />
          )}
        </div>
      </div>
    );
  }
}

export default ListingPage;
