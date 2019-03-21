import React from "react";
import WorkspaceListing from "../ListingPage/Listing/Listing.js";

class ListingPage extends React.Component {
  render() {
    var style1 = {
      background: "white"
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
            Hello I'm a map
          </div>
        </div>
      </div>
    );
  }
}

export default ListingPage;
