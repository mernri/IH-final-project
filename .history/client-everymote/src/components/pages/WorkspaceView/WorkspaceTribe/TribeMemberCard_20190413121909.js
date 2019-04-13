import React, { Component } from "react";
import axios from "axios";
import "./TribeMemberCard.css";

export default class TribeMemberCard extends Component {
  // get the id, displays the name, picture and occupation


  render() {
    console.log(this.props.isUserInTribe)
    return (
      <div>
        <div className="user-card">
          <article>
            <div className="useravatar">
              {this.props.user && this.props.isUserInTribe === true (
                <img
                  src="https://material.io/tools/icons/static/icons/baseline-close-24px.svg"
                  alt=""
                  className="close"
                  onClick={this.props.removeUser}
                />
              )}
              <img
                src={this.props.tribeMember.picture}
                alt="Avatar"
                className="avatar profile-photo"
              />
            </div>
            <div className="userprofile-info">
              <h2>
                {this.props.tribeMember.fullname ||
                  this.props.tribeMember.fullName}
              </h2>
              <p>{this.props.tribeMember.occupation}</p>
            </div>
          </article>
        </div>
      </div>
    );
  }
}
