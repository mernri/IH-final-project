import React, { Component } from "react";
import AuthService from "../Authservices.js";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  service = new AuthService();

  handleFormSubmit = event => {
    event.preventDefault();
    const email = this.state.email;
    const password = this.state.password;

    // PERMET DE CREER UN NOUVEAU PROJET AVEC LES INFOS DU FORMULAIRE
    this.service
      .signup(this.state.email, this.state.password)
      .then(() => {
        this.setState({
          email: "",
          password: ""
        });
      })
      .catch(error => console.log(error));
  };

  handleChange = event => {
    const { name, value } = event.target;
    console.log({ name }, { value });
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <h3 className="title has-text-grey">Signup</h3>
              <p className="subtitle has-text-grey">Go go go </p>

              <form onSubmit={() => {}}>
                <label>email:</label>
                <input
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={e => this.handleChange(e)}
                />

                <label>Password:</label>
                <input
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={e => this.handleChange(e)}
                />
                <div className="control has-text-centered">
                  <button className="button is-link ">Next</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
