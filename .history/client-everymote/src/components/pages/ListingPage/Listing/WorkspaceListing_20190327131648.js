import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import ListingCard from "./ListingCard.js";
import "bulma/css/bulma.css";

class Listing extends Component {
  constructor() {
    super();
    this.state = { listOfWorkspaces: [] };
  }

  getAllWorkspaces = () => {
    axios
      .get(`http://localhost:5000/api/workspaces`)
      .then(responseFromApi => {
        this.setState({
          listOfWorkspaces: responseFromApi.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getAllWorkspaces();
  }

  render() {
    return (
      <div>
        <div>
          {this.state.listOfWorkspaces.map(workspace => {
            return (
              <div key={workspace._id}>
                <Link to={`/workspace/${workspace._id}`}>
                  <div style={{ width: "35%", float: "left", padding: "15px" }}>
                    <ListingCard {...workspace} />
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
        <div style={{ width: "40%", float: "right" }} />

        {console.log("this state list = " + this.state.listOfWorkspaces)}
      </div>
    );
  }
}

export default Listing;
