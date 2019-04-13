import React, { Component } from "react";
import axios from "axios";
import "./Profile.css";

export default class Profile extends Component {

  componentWillMount() {
    this.getTribeName(hello, "5caa4e5b3b1f2431541e25ac")
  }

  getTribeName = tribeId => {
    axios.get(`http://localhost:5000/api/${tribeId}`).then(theTribe => {
      console.log(theTribe)
      return theTribe
    })
  }

  render() {
    return (
      <div>
        <div className="profile-card">
          <div className="profile-picture">
            <img
              src={this.props.user.picture || "https://material.io/tools/icons/static/icons/baseline-person-24px.svg"}
              alt="Avatar"
              className="avatar profile-photo"
            />
          </div>
          <div className="profile-info">
            <h2>{this.props.user.fullname || this.props.user.fullName}</h2>
            <p>{this.props.user.occupation}</p>
            <p className="jointribe">
            {this.props.user.tribe || <a href="/workspaces"> join a tribe </a>}
            </p>
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
