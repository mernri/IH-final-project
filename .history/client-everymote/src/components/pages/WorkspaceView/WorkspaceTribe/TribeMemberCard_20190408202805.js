import React, { Component } from "react";

export default class TribeMemberCard extends Component {

   getTheTribeUser = () => {
     
   }

  render() {
    console.log("tribe member card", this.props.users)

    return (
      <div>
         <strong>hello tribe card, I'm {this.props.userId}</strong> 
      </div>
    );
  } 
}
