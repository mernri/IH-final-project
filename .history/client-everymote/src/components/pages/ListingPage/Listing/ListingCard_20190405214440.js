import React from "react";
import "./ListingCard.css";

class ListingCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <img src={this.props.pictures[0]} alt="Placeholder" />
        <div class="text">
          <strong> {this.props.name} </strong>
          <p className="column"> €{this.props.monthlyPrice} /mo</p>
        </div>
      </div>
    );
  }
}

export default ListingCard;
