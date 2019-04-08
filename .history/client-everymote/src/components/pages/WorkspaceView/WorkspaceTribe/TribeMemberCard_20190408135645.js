import React, { Component } from "react";

export default class TribeMemberCard extends Component {
  render() {
    return (
      <div>
        <p> {this.props.users} </p>
      </div>
    );
  }
}
