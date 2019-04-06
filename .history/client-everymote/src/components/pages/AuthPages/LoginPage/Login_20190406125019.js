import React, { Component } from "react";
import AuthService from "../Authservices.js";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      redirectToListing: false
    };
  }

  service = new AuthService();

  handleFormSubmit = event => {
    event.preventDefault();
    this.service.login(this.state.email, this.state.password).then(response => {
/      this.props.history.push("/");
      this.setState({
        email: "",
        password: "",
        redirectToListing: true
      });
      console.log(this.state);
    });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    if (this.state.redirectToListing) {
      return <Redirect to="/workspaces" />;
    }
    return (
      <div>
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <h3 className="title has-text-grey">Login</h3>
              <p className="subtitle has-text-grey">Happy to see you</p>

              <form onSubmit={this.handleFormSubmit}>
                {/* EMAIL  */}
                <div className="field">
                  <label className="label">email</label>
                  <div className="control">
                    <input
                      name="email"
                      className="input"
                      type="text"
                      placeholder="type your name"
                      value={this.state.email}
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
                      value={this.state.password}
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

export default Login;
