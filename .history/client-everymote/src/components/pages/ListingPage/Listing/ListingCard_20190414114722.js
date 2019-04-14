import React from "react";
import "./ListingCard.scss";

class ListingCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  

  render() {
    return (
      <div className="card" style={{ height: "100%" }}>
        {/* <div className="card is-shady" > */}
        <div className="card-image" style={{ height: "80%" }}>
          <figure className="image is-5by3s">
            <img src={this.props.pictures[0]} alt="Placeholder" />
          </figure>
        </div>

        <div className="content">
          <p className="subtitle">
            <strong> {this.props.name} </strong>
          </p>
          <p className="card-price"> €{this.props.monthlyPrice} /mo</p>
        </div>

        {/* </div> */}
      </div>
    );
  }
}

export default ListingCard;
