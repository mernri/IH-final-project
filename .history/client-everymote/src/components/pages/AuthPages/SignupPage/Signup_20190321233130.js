import React, { Component } from "react";
import AuthService from "../Authservices.js";
import { Redirect } from "react-router-dom";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      email: "",
      password: "",
      toOnboarding: false
    };
  }

  service = new AuthService();

  fetchUser = () => {
    if (this.state.user === null ) {
      this.service.loggedin()
        .then(response => this.setState({user: response}))
        .catch(err => this.setState({user: false}))
      ;
    }
  };

  updateUser = (data) => {
    this.setState({user: data});
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;

    // PERMET DE CREER UN NOUVEAU PROJET AVEC LES INFOS DU FORMULAIRE
    this.service
      .signup(email, password)
      .then(() => {
        this.setState({
          email: "",
          password: "",
          toOnboarding: true
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
    if (this.state.toOnboarding) {
      return <Redirect to='/onboarding' />
    }
    return (
      <div>
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <h3 className="title has-text-grey">Signup</h3>
              <p className="subtitle has-text-grey">Go go go </p>

              <form onSubmit={this.handleFormSubmit} user={}>
                {/* EMAIL  */}
                <div className="field">
                  <label className="label">email</label>
                  <div className="control">
                    <input
                      name="email"
                      className="input"
                      type="text"
                      placeholder="type your name"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                {/* PASSWORD  */}
                <div className="field">
                  <label className="label">password</label>
                  <div className="control">
                    <input
                      name="password"
                      className="input"
                      type="password"
                      placeholder="type your password"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

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
