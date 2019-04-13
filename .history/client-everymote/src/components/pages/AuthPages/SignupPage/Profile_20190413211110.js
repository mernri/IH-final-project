import React, { Component } from "react";
import axios from "axios";
import "./Profile.css";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tribename: ""
    };
  }
  componentWillMount() {
    this.getTribeName(this.props.user.tribe);
  }

  getTribeName = async tribeId => {
    await axios
      .get(`http://localhost:5000/api/tribe/${tribeId}`)
      .then(theTribe => {
        axios
          .get(`http://localhost:5000/api/workspace/${theTribe.data.workspace}`)
          .then(theWorkspace => {
            console.log(theWorkspace.data.name);
            this.setState({
              tribename: theWorkspace.data.name
            });
            return theWorkspace.data.name;
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <div className="profile-card">
          <div className="profile-picture">
            <img
              src={
                this.props.user.picture ||
                "https://material.io/tools/icons/static/icons/baseline-person-24px.svg"
              }
              alt="Avatar"
              className="avatar profile-photo"
            />
          </div>
          <div className="profile-info">
            <h1>{this.props.user.fullname || this.props.user.fullName}</h1>
            <p>{this.props.user.occupation}</p>
            {this.state.tribename && (
              <p className="jointribe">
                {this.state.tribename || (
                  <a href="/workspaces"> join a tribe </a>
                )}
              </p>
            )}
          </div>
        </div>
        <div className="profile-content">
          coucou je suis le contenu de la classe profile-content
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    );
  }
}
