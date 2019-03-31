import React, { Component } from "react";
import axios from "axios";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      citySearched: " ",
      workspacesInCitySearched: {}
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { citySearched } = this.state;
    console.log("city searched is " + citySearched)

    axios
      .get(`http://localhost:5000/api/workspaces/${citySearched}`)
      .then(responseFromApi => {
        console.log(responseFromApi)
        this.setState({
          citySearched: responseFromApi.data
        });
      })
      .catch(error => console.log(error));;
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <div className="field">
            <div className="control">
              <input
                name="citySearched"
                className="input"
                type="text"
                placeholder="Ex: Paris, Berlin..."
                onChange={this.handleChange}
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
