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

			<div class="card-image">
				<figure class="image is-4by3">
					<img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
				</figure>
			</div>
			<div class="card-content">
				<div class="media">
					<div class="media-left">
						<figure class="image is-48x48">
							<img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
						</figure>
					</div>
					<div class="media-content">
						<p class="title is-4">John Smith</p>
						<p class="subtitle is-6">@johnsmith</p>
					</div>
				</div>

				<div class="content">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a>@bulmaio</a>.
					<a href="#">#css</a> <a href="#">#responsive</a>
					<br/>
					<time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
				</div>
			</div>
		</div>






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
    );
  }
}

export default ListingCard;
