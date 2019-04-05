import React, { Component } from "react";
import { Link } from "react-router-dom";
import ListingCard from "./ListingCard.js";
import "bulma/css/bulma.css";
import "./WorkspaceListing.css";

class WorkspaceListing extends Component {
  render() {
    return (
      <div class="columns is-multiline" style={{width: 90M}}>
        {this.props.workspaces.map(workspace => {
          return (
            <div
              class="column is-half-desktop is-half-tablet"
              key={workspace._id}
            >
              <Link to={`/workspace/${workspace._id}`}>
              <ListingCard {...workspace} />
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default WorkspaceListing;
