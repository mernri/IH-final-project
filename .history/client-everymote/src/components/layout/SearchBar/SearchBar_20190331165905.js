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
    const {
      name,
      address,
      zipcode,
      city,
      description,
      phone,
      pictures,
      monthlyPrice,
      dailyPrice,
      annualPrice
    } = this.state;

    // PERMET DE CREER UN NOUVEAU workspace AVEC LES INFOS DU FORMULAIRE
    axios
      .post(
        "http://localhost:5000/api/workspaces/add",
        {
          name,
          address,
          zipcode,
          city,
          description,
          phone,
          pictures,
          monthlyPrice,
          dailyPrice,
          annualPrice
        },
        { withCredentials: true }
      )
      .then(() => {
        this.setState({
          name: "",
          address: "",
          zipcode: "",
          city: "",
          description: "",
          phone: "",
          pictures: [],
          monthlyPrice: "",
          dailyPrice: "",
          annualPrice: "",
          redirectToOnboarding: true
        });
      })
      .catch(error => console.log(error));
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
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
