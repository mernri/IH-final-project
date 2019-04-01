import React from "react";

class ListingCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {/* A VIRER */}

        <div className="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src={this.props.pictures[0]} alt="Placeholder" />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left" />
              <div class="media-content">
                <p class="title is-4">{this.props.name}</p>
              </div>
            </div>

            <div className="card">
              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                <a href="#">#css</a> <a href="#">#responsive</a>
                <br />
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              </div>
            </div>
          </div>

          {/* A VIRER */}

          <div className="card">
            <div className="card-image">
              <figure className="image is-3by2">
                <img src={this.props.pictures[0]} alt="Placeholder" />
              </figure>
            </div>

            <div className="card-content">
              <div className="media">
                <div className="media-content">
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
        </div>
      </div>
    );
  }
}

export default ListingCard;
