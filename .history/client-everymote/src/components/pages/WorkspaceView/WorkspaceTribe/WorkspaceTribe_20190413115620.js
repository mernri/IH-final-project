import React, { Component } from "react";
import axios from "axios";
import TribeMemberCard from "./TribeMemberCard.js";
import AuthService from "../../AuthPages/Authservices.js";
import "./WorkspaceTribe.css";

class WorkspaceTribe extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  service = new AuthService();

  componentWillMount() {
    this.getWorkspaceTribe();
  }

  // // Récupére les users de la tribe qui a pour workspace celui dont l'id est reçu en props
  // // LORSQUE JE SUPPRIME UN UTILISATEUR, IL NE DISPARAIT PAS DE LA TRIBE (CAR PAS DE POPULATE) => DONC LA TRIBE NE S'UPDATE PAS
  getWorkspaceTribe = async () => {
    await axios
      .get(
        `http://localhost:5000/api/workspace/${this.props.workspaceId}/tribe`
      )
      .then(responseFromApi => {
        const theTribe = responseFromApi.data;
        this.setState(theTribe);
        console.log("getworkspacetribe() => workspacetribe", this.state);
      })
      .catch(err => {
        console.log(err);
      });
  };

  // Vérifie si l'utilisateur est dans la tribe pour décider s'il doit voir le bouton ou non
  isUserInTribe = () => {
    return this.props.members
      .map(member => {
        return member._id;
      })
      .includes(this.props.user._id);
  };

  // Si l'utilisateur est connecté mais ne fais pas partie de la tribe => joinTheTribe : il rejoint la tribe et ne voit plus le bouton
  joinTheTribe = () => {
    this.service
      .loggedin()
      .then(user => {
        return user;
      })
      .then(user => {
        axios
          .put(
            `http://localhost:5000/api/workspace/${
              this.props.workspaceId
            }/tribe/${user._id}`
          )
          .then(tribeUsers => {
            console.log("tribeUsers", tribeUsers);
            this.setState(tribeUsers);
            this.setState({ userInTribe: true });
            this.getWorkspaceTribe();
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
        console.log(err);
      });
  };

  // Leave the tribe
  leaveTheTribe = () => {
    debugger;
    if (this.state.userInTribe && this.state.user) {
      const user = this.state.user._id;
      axios
        .delete(
          `http://localhost:5000/api/workspace/${
            this.props.workspaceId
          }/tribe/${user._id}`
        )
        .then(() => {
          this.setState({
            userInTribe: false
          });
          //this.getWorkspaceTribe();
          console.log(this.state.users);
          this.getWorkspaceTribe();
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  render() {
    return (
      <div>
        {/* Manque une condition : si l'utilisateur n'est pas connecté et qu'il clique sur "Join the tribe" il faut le rediriger vers le login */}
        <div className="join-tribe-button">
          {this.props.user && this.state.users ? (
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
        </div>

        {/* Render the TribeMemberCards once this.state.users is in the state */}
        {/* {this.state.users && this.state.userInTribe ? (
          <div>
            {this.state.users.map(tribeUser => {
              return (
                <div key={tribeUser._id}>
                  <TribeMemberCard
                    user={tribeUser}
                    loggedinUser={this.state.user}
                    removeUser={this.leaveTheTribe}
                  />
                </div>
              );
            })}
          </div>
        ) : (
          <div> no one yet in this tribe</div>
        )} */}
      </div>
    );
  }
}

export default WorkspaceTribe;
