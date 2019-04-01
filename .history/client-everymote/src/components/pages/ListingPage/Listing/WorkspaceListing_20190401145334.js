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
          {this.props.workspaces.map(workspace => {
            return (
              <section class="section">
                <div class="container" style={{ backgroundColor: "red" }}>
                  <div class="card" key={workspace._id}>
                    <Link to={`/workspace/${workspace._id}`}>

                        <ListingCard {...workspace} />
                    </Link>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    );
  }
}

export default WorkspaceListing;
