import React, { Component } from "react";
import axios from "axios";

export default class TribeMemberCard extends Component {
  // get the id, displays the name, picture and occupation

  render() {
    return (
      <div>
        {this.props.user && (
          <strong>hello tribe card, I'm coucou {this.props.user._id}</strong>
        )
        }
      </div>
    );
  }
}
