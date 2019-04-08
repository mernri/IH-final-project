import React, { Component } from "react";

export default class TribeMemberCard extends Component {

   

  render() {
    console.log("tribe member card", this.props.users[0])

    return (
      <div>
         <strong>hello tribe card</strong> 
      </div>
    );
  } 
}
