import React, { Component } from "react";
import axios from "axios";
import TribeMemberCard from "./TribeMemberCard.js";
import AuthService from "../../AuthPages/Authservices.js";

class WorkspaceTribe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      userInTribe: false
    };
  }

  service = new AuthService();

  componentWillMount() {
    this.getWorkspaceTribe().then(() => {
      this.isUserInTribe();
    });
  }

  // Récupére les users de la tribe qui a pour workspace celui dont l'id est reçu en props
  // LORSQUE JE SUPPRIME UN UTILISATEUR, IL NE DISPARAIT PAS DE LA TRIBE (CAR PAS DE POPULATE) => DONC LA TRIBE NE S'UPDATE PAS
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
  };

  // Vérifie si l'utilisateur est dans la tribe pour décider s'il doit voir le bouton ou non
  isUserInTribe = () => {
    this.service
      .loggedin()
      .then(user => {
        this.setState({ user: user });
        console.log(user._id)        
        console.log(this.state.user._id)
        console.log(this.state.users.map(user => { return user}).includes(user._id))
        this.state.users.map(user => { return user._id}).includes(user._id)
          ? this.setState({ userInTribe: true })
          : this.setState({ userInTribe: false });
        return user._id;
      })
      .catch(err => {
        console.log(err);
      });
  };

  // Si l'utilisateur est connecté mais ne fais pas partie de la tribe => joinTheTribe : il rejoint la tribe et ne voit plus le bouton
  joinTheTribe = () => {
    console.log("is user in tribe ?", this.state.userInTribe)
    this.service
      .loggedin()
      .then(user => {
        return user._id;
      })
      .then(user => {
        axios
          .put(
            `http://localhost:5000/api/workspace/${
              this.props.workspaceId
            }/tribe/${user._id}`
          )
          .then(tribeUsers => {
            console.log("tribeUsers", tribeUsers)
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

  render() {
    return (
      <div>
        {/* Manque une condition : si l'utilisateur n'est pas connecté et qu'il clique sur "Join the tribe" il faut le rediriger vers le login */}
        <div className="join-tribe-button">
          {this.state.user && !this.state.userInTribe ? (
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

        {/* Render the TribeMemberCard once this.state.users is in the state */}
        {this.state.users ? (
          <div>
            {this.state.users.map(user => {
              return (
                <div key={user._id}>
                  <TribeMemberCard user={user} />
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
