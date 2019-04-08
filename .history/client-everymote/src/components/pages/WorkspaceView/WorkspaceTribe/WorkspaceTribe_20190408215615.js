import React, { Component } from "react";
import axios from "axios";
import AuthService from "../../AuthPages/Authservices.js";
import TribeMemberCard from "./TribeMemberCard.js";

class WorkspaceTribe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInTribe: false
    };
  }

  service = new AuthService();

  componentWillMount() {
    console.log("users", this.state.users)
    this.getTribeUser()
  }

  getWorkspaceTribe = async () => {
    await axios
      .get(
        `http://localhost:5000/api/workspace/${this.props.workspaceId}/tribe`
      )
      .then(responseFromApi => {
        const theTribe = responseFromApi.data;
        this.setState(theTribe);
        console.log("hey the state", this.state)
      })
      .catch(err => {
        console.log(err);
      });
    // await this.isUserInTribe();
  };

  getTribeUser = () => {
     axios
      .get(
        `http://localhost:5000/api/tribe/5caba1bce00b9945986ecf98`
      ).then(reponse => {
        console.log("the cool users are : ", reponse.data.users)
      })
  }

  // joinTheTribe = () => {
  //   this.service
  //     .loggedin()
  //     .then(user => {
  //       return user._id;
  //     })
  //     .then(userId => {
  //       axios
  //         .put(
  //           `http://localhost:5000/api/workspace/${
  //             this.props.workspaceId
  //           }/tribe/${userId}`
  //         )
  //         .then(tribeUsers => {
  //           this.setState(tribeUsers);
  //           this.setState({ userInTribe: true });
  //         });
  //     });
  // };

  // isUserInTribe = () => {
  //   this.service
  //     .loggedin()
  //     .then(user => {
  //       this.setState({ user: user });
  //       // console.log("this state user", this.state.user);
  //       return user._id;
  //     })
  //     .then(userId => {
  //       this.state.users.includes(userId)
  //         ? this.setState({ userInTribe: true })
  //         : this.setState({ userInTribe: false });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

  render() {
    return (
      <div>
        {/* Manque une condition : si l'utilisateur n'est pas connecté et qu'il clique sur "Join the tribe" il faut le rediriger vers le login */}
        
        {/* <div className="join-tribe-button">
          {!this.state.userInTribe && this.state.user ? (
            <div
              className="button"
              onClick={() => {
                this.joinTheTribe();
              }}
            >
              Join the Tribe
            </div>
          ) : (
            <div>
              <strong>
                You're either in a tribe or your not connected. whatever, I
                don't care.
              </strong>
            </div>
          )}
        </div> */}

          
        {/* Render the TribeMemberCard once this.state.users is true (asynchronous rendering) */}
        {this.state.users ? (
          <div>
            {this.state.users.map(userId => {
              return (
                <div key={userId}>
                  <TribeMemberCard userId={userId} />
                </div>
              );
            })}
          </div>
        ) : (
          <div> no one yet in this tribe</div>
        )}
      </div>
    );
  }
}

export default WorkspaceTribe;
