import React, { Component } from "react";
import axios from "axios";
import AuthService from "../../AuthPages/Authservices.js";

class WorkspaceTribe extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  service = new AuthService();

  componentDidMount() {
    this.getWorkspaceTribe();
    this.findTheUser();
  }

  getWorkspaceTribe = () => {
    axios
      .get(
        `http://localhost:5000/api/workspace/${this.props.workspaceId}/tribe`
      )
      .then(responseFromApi => {
        const theTribe = responseFromApi.data;
        this.setState(theTribe);
      })
      .then(() => {
        console.log("et voici ma tribe ! : ", this.state.users);
      })
      .catch(err => {
        console.log(err);
      });
  };

  findTheUser = () => {
    this.service.loggedin().then(user => {
      return user._id;
    });
  };

  joinTheTribe = () => {
    console.log(this.findTheUser())
    console.log(userId)
    // axios.put("/workspace/:id/tribe/:userid")
  }

  render() {
    return (
      <div>
        <div
          className="button"
          onClick={() => {
            this.joinTheTribe();
          }}
        >
           Join the Tribe
        </div>

        <ul>
          <li>
            > If no one is in the tribe yet, you'll have a "no one in this tribe
            yet :( + button "Join the tribe"
          </li>
          <li>
            > If there are already tribe members : you'll see the tribe members
            + button "join the tribe"
          </li>
          <li>
            > If you're connected and you click on join the tribe : you are
            added to the tribe + you see your card in the first position of the
            tribe
          </li>
          <li>
            > If you're not connected and you click on join the tribe : you are
            redirect to the login page > then to the wokspace one you're logged
            in
          </li>
          <li>
            > If you want to leave a tribe : you can click on the red cross on
            your profile card or remove the tribe from your profile
          </li>
        </ul>
      </div>
    );
  }
}

export default WorkspaceTribe;
