import React from "react";

class ListingCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div class="card-image">
          <figure class="image is-4by3">
            <img src={this.props.pictures[0]} alt="Placeholder" />
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-left" />
            <div class="media-content">
              <div className="columns">
                <p className="subtitle column is-two-thirds">
                  <strong> {this.props.name} </strong>
                </p>
                <p className="column"> €{this.props.monthlyPrice} /mo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListingCard;
