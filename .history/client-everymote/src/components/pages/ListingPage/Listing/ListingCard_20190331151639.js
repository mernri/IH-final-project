import React from "react";

class ListingCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="card">
          
          <div className="card-image">
            <figure className="image is-3by2">
              <img
                src={this.props.pictures[0]}
                alt="Placeholder"
              />
            </figure>
          </div>

          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <div className="columns">
                <p className="subtitle column is-two-thirds" > <strong> {this.props.name} </strong></p>
                <p className="column" > €{this.props.monthlyPrice} /mo</p>


                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default ListingCard;
