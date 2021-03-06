import React, { Component } from "react";
import { Link } from "react-router-dom";
import ListingCard from "./ListingCard.js";
import "bulma/css/bulma.css";
import "./WorkspaceListing.css";

class WorkspaceListing extends Component {
  render() {
    return (
      <div>
        <div class="columns is-desktop is-4">
          {this.props.workspaces.map(workspace => {
            return (
                <div class="column" key={workspace._id}>
                  {/* <Link to={`/workspace/${workspace._id}`}> */}
                    <ListingCard {...workspace} />
                  {/* </Link> */}
                </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default WorkspaceListing;
