import React, { Component } from 'react'

export default class ListingCardTribe extends Component {


  render() {
console.log("tribe members", this.props.tribeMembers)
    return (
      <div>
          {
              this.props.tribeMembers.map(member => {
                  return <div> {member.picture} </div>
              })
          }
        
      </div>
    )
  }
}
