import React, { Component } from "react";
import "./ListingCardTribe.scss";

export default class ListingCardTribe extends Component {
  render() {
    return (
      <span className="listingCardTribe">
        {this.props.tribeMembers.map(member => {
          return (
            <img
              className="user-avatar"
              src={member.picture}
              alt=""
            />
          );
        })}
      </span>
    );
  }
}
