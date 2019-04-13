import React, { Component } from "react";
import axios from "axios";
import "./TribeMemberCard.css";

export default class TribeMemberCard extends Component {
  // get the id, displays the name, picture and occupation
  constructor(props) {
    super(props);
    this.state = {};
  }

  getOneUser = userId => {
    axios.get(`http://localhost:5000/api/user/${userId}`).then(userData => {
      // console.log("hello, i'm the a user in the tribe", userData.data);
      this.setState(userData.data);
      return userData.data;
    });
  };

  showDeleteButton = userID => {
    // if the user logged in is the user I am about to show, add a red cross on its name
  };

  render() {
    console.log(this.props.user);
    return (
      <div>
        <div className="user-card">
          <article>
            <div className="useravatar">
              <img
                src={this.props.user.picture}
                alt="Avatar"
                className="avatar profile-photo"
              />
            </div>
            <div className="userprofile-info">
              <h2>{this.props.user.fullname || this.props.user.fullName}</h2>
              <p>{this.props.user.occupation}</p>
            </div>
          </article>
        </div>
      </div>
    );
  }
}
