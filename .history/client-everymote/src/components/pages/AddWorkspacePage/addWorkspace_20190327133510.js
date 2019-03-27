import React, { Component } from "react";
import axios from 'axios';


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


  handleFormSubmit = (event) => {
    event.preventDefault();
    const title = this.state.title;
    const description = this.state.description;
    axios.post("http://localhost:5000/api/projects", { title, description }, {withCredentials:true})
    .then( () => {
        this.props.getData();
        this.setState({title: "", description: ""});
    })
    .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
      const {name, value} = event.target;
      this.setState({[name]: value});
  }



  handleFormSubmit = event => {
    event.preventDefault();
    const { name, address, zipcode, city, phone, pictures, monthlyPrice, dailyPrice, annualPrice } = this.state;

    // PERMET DE CREER UN NOUVEAU workspace AVEC LES INFOS DU FORMULAIRE
    axios.post("http://localhost:5000/workspaces/add", { name, address, zipcode, city, phone, pictures, monthlyPrice, dailyPrice, annualPrice }, {withCredentials:true})
      .then(() => {
        this.setState({
            name: "",
            address: "",
            zipcode: "",
            city: "",
            phone: "",
            pictures: [],
            monthlyPrice: "",
            dailyPrice: "",
            annualPrice: ""
        });
      })
      .catch(error => console.log(error));
  };


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
                      name="city"
                      className="input"
                      type="text"
                      placeholder="type the city"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                {/* phone number  */}
                <div className="field">
                  <label className="label">Phone number</label>
                  <div className="control">
                    <input
                      name="phone"
                      className="input"
                      type="text"
                      placeholder="type the phone"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                {/* Monthly price (optional) */}
                <div className="field">
                  <label className="label">Monthly Price</label>
                  <div className="control">
                    <input
                      name="monthlyPrice"
                      className="input"
                      type="number"
                      placeholder="type the Monthly Price"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                {/* Daily price (optional) */}
                <div className="field">
                  <label className="label">Daily Price</label>
                  <div className="control">
                    <input
                      name="dailyPrice"
                      className="input"
                      type="number"
                      placeholder="type the Daily Price"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                {/* Annual price (optional) */}
                <div className="field">
                  <label className="label">Annual Price</label>
                  <div className="control">
                    <input
                      name="annualPrice"
                      className="input"
                      type="number"
                      placeholder="type the Annual Price"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                 {/* Add pictures */}
                    MISSING PICTURES UPLOAD



                <div className="control has-text-centered">
                  <button className="button is-link ">Add</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
