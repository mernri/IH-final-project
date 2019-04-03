import React from "react";
import NavButton from "./NavButton.js";
import { Link } from "react-router-dom";
import AuthService from "../../pages/AuthPages/Authservices.js";
import "bulma/css/bulma.css";

export default class Nav extends React.Component {
  service = new AuthService();

  logoutUser = event => {
    this.service.logout().then(response => {
      this.props.updateUser(null);
    });
  };

  render() {
    return (
      <div className="navbar is-transparent">
        <div className="navbar-brand">
          <a className="navbar-item" href="#">
            <img
              src="data:image/png;base64,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"
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

          {this.props.user && this.props.user._id ? (

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="field is-grouped">
                  <div className="control">
                    <NavButton
                      isSmall
                      isSuccess
                      className="is-rounded my-class"
                    >
                      <Link to="/onboardin"> Profile </Link>
                    </NavButton>
                  </div>
                  <div className="control">
                    <NavButton
                      isSmall
                      isSuccess
                      className="is-rounded my-class"
                    >
                      <Link to="/workspaces" onClick={this.logoutUser}>
                        Logout
                      </Link>
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
