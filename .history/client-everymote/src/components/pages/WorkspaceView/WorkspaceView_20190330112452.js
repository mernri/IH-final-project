import React from "react";
import WorkspaceGallery from "./WorspaceGallery/WorkspaceGallery.js";
// import WorkspacePresentation from "./AdviewPresentation.js";
// import WorkspaceAmenities from "./AdViewAmenities.js";
// import WorkspaceMap from "./AdViewMap.js";

class AdView extends React.Component {
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
      </div>
    );
  }
}

export default AdView;
