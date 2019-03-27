import React, { Component } from "react";

export default class addWorkspace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      zipcode: "",
      city: "",
      phone: "",
      pictures: [],
      monthlyPrice: "",
      dailyPrice: "",
      annualPrice: ""
    };
  }

  render() {
    return (
      <div>
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <h3 className="title has-text-grey">Add a workspace</h3>
              <p className="subtitle has-text-grey">DO IT!  </p>

              <form onSubmit={this.handleFormSubmit}>
                {/* Name  */}
                <div className="field">
                  <label className="label">name</label>
                  <div className="control">
                    <input
                      name="name"
                      className="input"
                      type="text"
                      placeholder="type the name"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                {/* Address  */}
                <div className="field">
                  <label className="label">Address</label>
                  <div className="control">
                    <input
                      name="address"
                      className="input"
                      type="text"
                      placeholder="type the address"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                 {/* Zipcode  */}
                 <div className="field">
                  <label className="label">Zipcode</label>
                  <div className="control">
                    <input
                      name="zipcode"
                      className="input"
                      type="number"
                      placeholder="type the zipcode"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                  {/* city  */}
                  <div className="field">
                  <label className="label">City</label>
                  <div className="control">
                    <input
                      name="zipcode"
                      className="input"
                      type="number"
                      placeholder="type the zipcode"
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
