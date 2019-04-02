import React from "react";
import NavButton from "./NavButton.js";
import { Link } from "react-router-dom";
import AuthService from "../../pages/AuthPages/Authservices.js";


import "bulma/css/bulma.css";

export default class Nav extends React.Component {


  service = new AuthService();

  logoutUser = () => {

  }


  render() {
    return (
      <div className="navbar is-transparent">
        <div className="navbar-brand">
          <a className="navbar-item" href="#">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              alt="Bulma: a modern CSS framework based on Flexbox"
              width="112"
              height="28"
            />
          </a>
          <div
            className="navbar-burger burger"
            data-target="navbarExampleTransparentExample"
          />
        </div>

        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item" to="/workspaces">
              Workspaces
            </Link>
          </div>

          {this.props.user ? (
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="field is-grouped">
                  <div className="control">
                    <NavButton
                      isSmall
                      isSuccess
                      className="is-rounded my-class"
                    >
                      <Link to="/onboarding"> Profile </Link>
                    </NavButton>
                  </div>
                  <div className="control">
                    <NavButton
                      isSmall
                      isSuccess
                      className="is-rounded my-class"
                    >
                      <Link to="/workspaces" onClick={this.logoutUser}> Logout </Link>
                    </NavButton>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="field is-grouped">
                  <div className="control">
                    <NavButton
                      isSmall
                      isSuccess
                      className="is-rounded my-class"
                    >
                      <Link to="/login"> Login </Link>
                    </NavButton>
                  </div>
                  <div className="control">
                    <NavButton
                      isSmall
                      isSuccess
                      className="is-rounded my-class"
                    >
                      <Link to="/signup"> Signup </Link>
                    </NavButton>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
