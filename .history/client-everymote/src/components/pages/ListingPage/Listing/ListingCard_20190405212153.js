import React from "react";
import "./ListingCard.css";

class ListingCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="card">
        {" "}
        <img src={this.props.pictures[0]} alt="Placeholder" />
        <strong> {this.props.name} </strong>
        <p className="column"> €{this.props.monthlyPrice} /mo</p>
      </div>
    );
  }
}

export default ListingCard;
