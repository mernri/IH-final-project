import React from "react";
import WorkspaceListing from "../ListingPage/Listing/Listing.js";
import MapSection from "./Map/MapSection.js";
import "./ListingPage.css";

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
            <div class="field toggle-map">
              <input
                id="switchRoundedDefault"
                type="checkbox"
                name="switchRoundedDefault"
                class="switch is-rounded"
                checked="checked"
              />
              <label for="switchRoundedDefault">Switch rounded default</label>
            </div>
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
