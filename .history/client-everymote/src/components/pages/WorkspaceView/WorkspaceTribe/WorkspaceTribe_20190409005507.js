import React, { Component } from "react";
import axios from "axios";
import TribeMemberCard from "./TribeMemberCard.js";
import AuthService from "../../AuthPages/Authservices.js";

class WorkspaceTribe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInTribe: false
    };
  }

  service = new AuthService();

  componentWillMount() {
    this.getWorkspaceTribe();
  }

  getWorkspaceTribe = async () => {
    await axios
      .get(
        `http://localhost:5000/api/workspace/${this.props.workspaceId}/tribe`
      )
      .then(responseFromApi => {
        const theTribe = responseFromApi.data;
        this.setState(theTribe);
        console.log("the tribe properties", theTribe)
      })
      .catch(err => {
        console.log(err);
      });
    await this.isUserInTribe();
  };

  isUserInTribe = () => {
    this.service
      .loggedin()
      .then(user => {
        this.setState({ user: user });
        this.state.users.includes(user._id)
          ? this.setState({ userInTribe: true })
          : this.setState({ userInTribe: false });
        console.log("the connected user properties", this.state.user);
        console.log("the state", this.state);
        return user._id;
      })
      .catch(err => {
        console.log(err);
      });
  };

  // BALANCE UNE ERREUR QUAND J'ESSAIE DE JOINTHETRIBE, mais quand je recharge la page ça fonctionne
  joinTheTribe = () => {
    this.service
      .loggedin()
      .then(user => {
        console.log("étape 1- joinTheTribe", user._id)
        return user._id;
      })
      .then(userId => {
        axios
          .put(
            `http://localhost:5000/api/workspace/${
              this.props.workspaceId
            }/tribe/${userId}`
          )
          .then(tribeUsers => {
            this.setState(tribeUsers);
            this.setState({ userInTribe: true });
            console.log("étape 2- this.state après que l'utilisateur ait cliqué sur join the tribe", this.state)

          })
          .catch(err => {
            console.log(err);
          });
      })
      .cacth(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        {/* Manque une condition : si l'utilisateur n'est pas connecté et qu'il clique sur "Join the tribe" il faut le rediriger vers le login */}

        <div className="join-tribe-button">
          {this.state.user  && !this.state.userInTribe ? (
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

        {/* Render the TribeMemberCard once this.state.users is true (asynchronous rendering) */}
        {this.state.users ? (
          <div>
            {this.state.users.map(userId => {
              return (
                <div key={userId}>
                  <TribeMemberCard user={userId} />
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
