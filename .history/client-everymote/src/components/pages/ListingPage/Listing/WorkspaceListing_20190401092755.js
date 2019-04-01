import React, { Component } from "react";
import { Link } from "react-router-dom";
import ListingCard from "./ListingCard.js";
import axios from "axios";
import "bulma/css/bulma.css";

class WorkspaceListing extends Component {
  constructor() {
    super();
    this.state = {
      city: "",
      listOfWorkspaces: []
    };
  }

  getCityWorkspaces = () => {
    if (this.state.city !== " ") {
      const city = this.props.workspacesCity;
      axios
        .get(`http://localhost:5000/api/workspaces/${city}`)
        .then(responseFromApi => {
          this.setState({
            city: city,
            listOfWorkspaces: responseFromApi.data
          });
          console.log(this.state.city);
          console.log(this.state.listOfWorkspaces);
        })
        .catch(error => console.log(error));
    }
    else 
    this.getAllWorkspaces()
  };

  getAllWorkspaces = () => {
    if (this.state.city === " ") {
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
    }
  };

  componentDidMount() {
    this.getCityWorkspaces();
  }

  render() {
    return (
      <div>
        <div className="tile is-ancestor">
          <div className="tile is-vertical is-8">
            <div className="tile is-parent">
              {this.state.listOfWorkspaces.map(workspace => {
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
      </div>
    );
  }
}

export default WorkspaceListing;
