import React, { Component } from "react";
import axios from "axios";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      citySearched: ""
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const {citySearched} = this.state
    this.props.updateCity(citySearched)
    this.setState({
      citySearched: ""
    })

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
