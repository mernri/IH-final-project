import React, { Component } from "react";
// import AuthService from "../Authservices.js";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  // service = new AuthService();

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
                <div className="field">
                  <label className="label">email</label>
                  <div className="control">
                    <input
                      className="input"
                      name="email"
                      type="text"
                      placeholder="type your name"
                    />
                  </div>
                </div>

                <label>first_brewed:</label>
                <input
                  type="text"
                  name="text"
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
