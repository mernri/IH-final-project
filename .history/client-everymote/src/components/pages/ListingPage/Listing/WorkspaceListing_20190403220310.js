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
          <section className="container">
            <div className="columns features">
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
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default WorkspaceListing;
