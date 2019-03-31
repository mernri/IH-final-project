import React, { Component } from "react";
import { Link } from "react-router-dom";
import ListingCard from "./ListingCard.js";
import axios from "axios";
import NavButton from "../../../layout/NavBar/NavButton.js";
import "bulma/css/bulma.css";

class WorkspaceListing extends Component {
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
        <div className="tile is-ancestor">
          <div className="tile is-vertical is-8">
            <div className="tile">
              
            </div>
          </div>

          {console.log("this state list = " + this.state.listOfWorkspaces)}
        </div>
      </div>
    );
  }
}

export default WorkspaceListing;
