import React from "react";
import NavButton from "./NavButton.js";
import "bulma/css/bulma.css";


export default class Nav extends React.Component {
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
            <a className="navbar-item" href="#">
              Home
            </a>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                <div className="control">
                  <NavButton isSmall isSuccess className="is-rounded my-class">
                    Login
                  </NavButton>
                </div>
                <div className="control">
                  <NavButton isSmall isSuccess className="is-rounded my-class">
                    Signup
                  </NavButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
