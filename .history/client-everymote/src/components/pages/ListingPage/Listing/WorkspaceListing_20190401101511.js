import React, { Component } from "react";
import { Link } from "react-router-dom";
import ListingCard from "./ListingCard.js";
import "bulma/css/bulma.css";

class WorkspaceListing extends Component {

  render() {
    return (
      <div>
        <div className="tile is-ancestor">
            <div className="tile is-parent">
              {this.props.workspaces.map(workspace => {
                return (
                  <div key={workspace._id}>
                    <Link to={`/workspace/${workspace._id}`}>
                      <div
                        style={{ width: "33%", float: "left", padding: "15px" }}
                      >
                        <ListingCard {...workspace} />
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
        </div>
      </div>
    );
  }
}

export default WorkspaceListing;
