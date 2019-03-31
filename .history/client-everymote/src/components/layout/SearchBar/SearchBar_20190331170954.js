import React, { Component } from "react";
import axios from "axios";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      citySearched: ""
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const city = event.target.value;
    console.log(city)
    // PERMET DE CREER UN NOUVEAU workspace AVEC LES INFOS DU FORMULAIRE
    // axios
    //   .get(`http://localhost:5000/api/workspaces/${city}`)
    //   .then(responseFromApi => {
    //     this.setState({
    //       citySearched: responseFromApi.data
    //     });
    //   })
    //   .catch(error => console.log(error));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <div className="field">
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Ex: Paris, Berlin..."
                onSubmit={e => this.handleFormSubmit(e)}
              />
              <div className="control has-text-centered">
                  <button className="button is-link ">find</button>
                </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
