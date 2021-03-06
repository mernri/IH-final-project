import React from "react";
import WorkspaceListing from "./Listing/WorkspaceListing.js";
import MapSection from "./Map/MapSection.js";

import "bulma/css/bulma.css";
import ResultsHeader from "./ResultsHeader/ResultsHeader.js";

class ListingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "listing",
      workspaces: 
    };
  }

  toggleView = () => {
    this.state.view === "listing"
      ? this.setState({ view: "map" })
      : this.setState({ view: "listing" });
  };

  getWorkspaces = workspaces => {
    this.setState({
      workspaces: workspaces
    });
  };

  render() {
    return (
      <div>
        <ResultsHeader updateWorkspaces={this.getWorkspaces}/>

        <div
          className="workspaces-view"
          style={{ marginLeft: "5%", marginRight: "5%" }}
        >
          {this.state.view === "listing" ? 
          
          (
            <div>
            <div className="button is-success" onClick={() => {this.toggleView()}}> See on Map </div>
            <WorkspaceListing/>
            </div>
            
          ) : (

            <div>
            <div className="button is-success" onClick={() => {this.toggleView()}}> See as a List </div>
            <MapSection/>
            </div>
          )}

        </div>
      </div>
    );
  }
}

export default ListingPage;
