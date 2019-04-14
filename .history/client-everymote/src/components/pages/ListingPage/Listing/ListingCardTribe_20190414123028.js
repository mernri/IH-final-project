import React, { Component } from "react";

export default class ListingCardTribe extends Component {



  render() {

    return (
      <div>
        {this.props.tribeMembers.map(member => {
          return <img src={member.picture} alt="" />;
        })}
      </div>
    );
  }
}
