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
                <p className="title is-4">{this.props.name}</p>
                <p className="subtitle is-6">{this.props.city}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default ListingCard;
