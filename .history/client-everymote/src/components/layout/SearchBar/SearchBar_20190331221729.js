import React, { Component } from "react";
import axios from "axios";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workspacesInCitySearched: []
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const city = event.taget.value
    this.props.updateCity(city)
    console.log(event.target.value)
    // axios
    //   .get(`http://localhost:5000/api/workspaces/${citySearched}`)
    //   .then(responseFromApi => {
    //     this.setState({
    //       citySearched: citySearched,
    //       workspacesInCitySearched: responseFromApi.data
    //     });
    //     this.props.updateWorkspaces(responseFromApi.data);
    //     console.log(this.state);
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
