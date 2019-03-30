import React from "react";
import axios from "axios";

class ListingCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  //   Lorsque le composant est rendu dans la page on fait appel à getSingleProject
  // componentDidMount() {
  //   this.getSingleWorkspace();
  // }

  // getSingleWorkspace = () => {
  //   const { params } = this.props.match;
  //   axios
  //     .get(`http://localhost:5000/api/workspace/${params.id}`)
  //     .then(responseFromApi => {
  //       const theWorkspace = responseFromApi.data;
  //       this.setState(theWorkspace);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

  render() {
    return (
      <div>
        <div className="card">
          
          <div className="card-image">
            <figure className="image is-4by3">
              <img
                src={this.props.picture}
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
