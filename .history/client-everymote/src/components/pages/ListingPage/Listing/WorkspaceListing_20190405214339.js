import React, { Component } from "react";
import { Link } from "react-router-dom";
import ListingCard from "./ListingCard.js";
import "bulma/css/bulma.css";
import "./WorkspaceListing.css";

class WorkspaceListing extends Component {
  render() {
    return (
      <div>
        <div>
          <div class="container">
            <main class="grid">

              {this.props.workspaces.map(workspace => {
                return (
                  <div className="column is-4" key={workspace._id}>
                    <div className=" card is-shady">
                      <Link to={`/workspace/${workspace._id}`}>
                        <ListingCard {...workspace} />
                      </Link>
                    </div>
                  </div>
                );
              })}
              
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default WorkspaceListing;
