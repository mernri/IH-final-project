import React, { Component } from "react";
import "./ListingCardTribe.scss";

export default class ListingCardTribe extends Component {
  render() {
    return (
      <div className="listingCardTribe">
        {this.props.tribeMembers.map(member => {
          return (
            <img
              className="tribe-avatars-section"
              src={member.picture}
              alt=""
            />
          );
        })}
      </div>
    );
  }
}
