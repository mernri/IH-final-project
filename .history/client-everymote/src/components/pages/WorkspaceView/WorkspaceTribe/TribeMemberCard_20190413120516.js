import React, { Component } from "react";
import axios from "axios";
import "./TribeMemberCard.css";

export default class TribeMemberCard extends Component {
  // get the id, displays the name, picture and occupation

  render() {
    return (
      <div>
        <div className="user-card">
          <article>
            <div className="useravatar">
              {this.props.user && (
                <img
                  src="https://material.io/tools/icons/static/icons/baseline-close-24px.svg"
                  alt=""
                  className="close"
                  onClick={this.props.removeUser}
                />
              )}
              <img
                src={this.props.member.picture}
                alt="Avatar"
                className="avatar profile-photo"
              />
            </div>
            <div className="userprofile-info">
              <h2>
                {this.props.member.fullname || this.props.member.fullName}
              </h2>
              <p>{this.props.member.occupation}</p>
            </div>
          </article>
        </div>
      </div>
    );
  }
}
