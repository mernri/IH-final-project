import React, { Component } from "react";
import axios from "axios";
import TribeMemberCard from "./TribeMemberCard.js";

class WorkspaceTribe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInTribe: false
    };
  }

  componentWillMount() {
    this.getWorkspaceTribe().then(() => {console.log("users", this.state.users)})
    
  }

  getWorkspaceTribe = async () => {
    await axios
      .get(
        `http://localhost:5000/api/workspace/${this.props.workspaceId}/tribe`
      )
      .then(responseFromApi => {
        const theTribe = responseFromApi.data;
        this.setState(theTribe);
      })
      .catch(err => {
        console.log(err);
      });
    // await this.isUserInTribe();
  };

  getOneUser = userId => {
    axios.get(`http://localhost:5000/api/user/${userId}`).then(userData => {
      console.log("hello, i'm the only user in the tribe", userData.data);
      return userData.data;
    });
  };

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
  //         })
  //         .catch(err => {
  //           console.log(err);
  //         });
  //     })
  //     .cacth(err => {
  //       console.log(err);
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
{/* 
        <div className="join-tribe-button">
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
              const userData = this.getOneUser(userId);
              return (
                <div key={userId}>
                  <TribeMemberCard user={userData} />
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
