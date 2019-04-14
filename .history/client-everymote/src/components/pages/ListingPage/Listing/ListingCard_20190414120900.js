import React from "react";
import "./ListingCard.scss";
import axios from "axios";

class ListingCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.getWorkspaceTribe(this.props._id);
  }

  getWorkspaceTribe = workspaceId => {
    axios
      .get(`http://localhost:5000/api/workspace/${workspaceId}/tribe`)
      .then(responseFromApi => {
        const theTribe = responseFromApi.data;
        this.setState(theTribe);
        console.log(this.state.users);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="card" style={{ height: "100%" }}>
        <div className="card-image" style={{ height: "80%" }}>
          <figure className="image is-5by3s">
            <img src={this.props.pictures[0]} alt="Placeholder" />
          </figure>
        </div>

        <div className="content">
          <div className="name-price-line">
            <p className="subtitle">
              <strong> {this.props.name} </strong>
            </p>
            <p className="card-price"> €{this.props.monthlyPrice} /mo</p>
          </div>
          <div className="tribe-avatars-line">
            {this.state.users ? (
              <div className="tribe-avatars">
                
                
                {this.state.users.length}

               


              </div>



            ) : (
              <div className="tribe-avatars"> no users yet </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ListingCard;
