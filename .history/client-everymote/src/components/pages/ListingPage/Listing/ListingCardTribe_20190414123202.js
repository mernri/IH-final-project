import React, { Component } from "react";

export default class ListingCardTribe extends Component {



  render() {

    return (
      <div>
        {this.props.tribeMembers.map(member => {
          return <img className="tribe-avatars-section" src={member.picture} alt="" />;
        })}
      </div>
    );
  }
}
