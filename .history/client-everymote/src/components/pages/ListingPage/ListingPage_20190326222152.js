import React from "react";
import WorkspaceListing from "../ListingPage/Listing/Listing.js";
import MapSection from "./Map/MapSection.js";


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
            <WorkspaceListing />
          </div>
          <div className="column is-two-fifths" style={style2}>
            <div className="home-map">
              <MapSection />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListingPage;
