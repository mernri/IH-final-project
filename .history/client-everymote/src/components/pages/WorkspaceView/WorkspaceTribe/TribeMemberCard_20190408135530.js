import React, { Component } from "react";

export default class TribeMemberCard extends Component {
  render() {
    return (
      <div>
        <figure className="image is-128x128">
          <img
            class="is-rounded"
            src="https://bulma.io/images/placeholders/128x128.png"
            alt=""
          />
        <p> {this.props.user} </p>

        </figure>
      </div>
    );
  }
}
