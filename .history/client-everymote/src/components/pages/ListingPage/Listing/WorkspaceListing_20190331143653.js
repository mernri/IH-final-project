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

        <NavButton isSmall isSuccess className="is-rounded my-class" onClick = {this.props.toggleView()}>
           See on Map 
        </NavButton>

        <div className="columns">
          <div className="column is-on-third">
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

          {console.log("this state list = " + this.state.listOfWorkspaces)}
        </div>
      </div>
    );
  }
}

export default WorkspaceListing;
