import React, { Component } from "react";
import "./ListingCardTribe.scss";

export default class ListingCardTribe extends Component {
  render() {
    return (
      <span className="listingCardTribe">
        {this.props.tribeMembers.map(member => {
          return (
            <img
              className="tribe-avatars-section"
              src={member.picture}
              alt=""
            />
          );
        })}
      </span>
    );
  }
}
