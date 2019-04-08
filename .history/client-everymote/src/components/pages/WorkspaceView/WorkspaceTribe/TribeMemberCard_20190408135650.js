import React, { Component } from "react";

export default class TribeMemberCard extends Component {
  render() {
    return (
      <div>
        <p> {this.props.users[0]} </p>
      </div>
    );
  }
}
