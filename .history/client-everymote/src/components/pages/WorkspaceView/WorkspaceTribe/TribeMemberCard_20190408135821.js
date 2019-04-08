import React, { Component } from "react";

export default class TribeMemberCard extends Component {

    componentDidMount() {
        console.log("tribe member card", this.props.users)
    }

  render() {
    return (
      <div>
         <strong>hello tribe card</strong> 
      </div>
    );
  } 
}
